
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

  if (!token) {
    return (
      <FadeIn className="rounded-xl bg-gray-100 dark:bg-gray-800 p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Mapbox Token Required</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Please enter your Mapbox public token to display the map. 
          You can get a free token at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-imperial-600 dark:text-imperial-400 underline">mapbox.com</a>.
        </p>
        <form onSubmit={handleTokenSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={mapTokenInput}
            onChange={(e) => setMapTokenInput(e.target.value)}
            placeholder="Enter Mapbox token"
            className="px-4 py-2 border rounded-md flex-grow dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-imperial-600 dark:bg-imperial-500 text-white rounded-md hover:bg-imperial-700 dark:hover:bg-imperial-600 transition-colors"
          >
            Save Token
          </button>
        </form>
      </FadeIn>
    );
  }

  return (
    <FadeIn className={`relative rounded-xl overflow-hidden shadow-sm ${className}`}>
      <div ref={mapContainer} className="w-full h-[400px]" />
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-300">Loading map...</p>
        </div>
      )}
    </FadeIn>
  );
};

export default Map;
