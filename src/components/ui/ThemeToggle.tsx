
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500 dark:text-gray-400 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="data-[state=checked]:bg-imperial-500"
      />
      <Moon className="h-[1.2rem] w-[1.2rem] text-gray-500 dark:text-imperial-300 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  );
}
