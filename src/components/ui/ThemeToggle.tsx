
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] text-gray-500" />
        )}
      </button>
    </div>
  );
}
