// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor, SunMoon } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

const icons = {
  light: <Sun className="w-6 h-6 text-yellow-500" />,
  dark: <Moon className="w-6 h-6 text-blue-400" />,
  auto: <SunMoon className="w-6 h-6 text-yellow-500 dark:text-blue-400" />,
};

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition shadow-lg"
      aria-label="Toggle Dark Mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {icons[theme]}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
