
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FadeIn } from '@/utils/animations';
import { useTheme } from '@/contexts/ThemeContext';

interface MapProps {
  lat?: number;
  lng?: number;
  zoom?: number;
  className?: string;
}

const Map: React.FC<MapProps> = ({ 
  lat = 9.9252, 
  lng = 78.1198, 
  zoom = 12,
  className = '' 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const { isDarkMode } = useTheme();
  const [mapTokenInput, setMapTokenInput] = React.useState('');
  const [mapLoaded, setMapLoaded] = React.useState(false);
  const [token, setToken] = React.useState(localStorage.getItem('mapbox_token') || '');

  useEffect(() => {
    if (!mapContainer.current || !token) return;
    
    // Initialize the map
    mapboxgl.accessToken = token;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: isDarkMode 
          ? 'mapbox://styles/mapbox/dark-v11' 
          : 'mapbox://styles/mapbox/light-v11',
        center: [lng, lat],
        zoom: zoom
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      
      // Add marker for Madurai
      const marker = new mapboxgl.Marker({ color: isDarkMode ? '#6074ff' : '#2727e6' })
        .setLngLat([lng, lat])
        .setPopup(new mapboxgl.Popup().setHTML('<h3>Madurai, Tamil Nadu</h3><p>The Temple City</p>'))
        .addTo(map.current);
      
      map.current.on('load', () => {
        setMapLoaded(true);
      });
    } catch (error) {
      console.error('Error initializing map:', error);
      setToken('');
      localStorage.removeItem('mapbox_token');
    }

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [token, isDarkMode, lat, lng, zoom]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapTokenInput) {
      localStorage.setItem('mapbox_token', mapTokenInput);
      setToken(mapTokenInput);
    }
  };

  return(
    <></>
  )
};

export default Map;
