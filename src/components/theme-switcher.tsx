"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-full focus-visible:ring-1 hover:bg-background hover:dark:bg-background"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={theme}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 500,
            damping: 50,
          }}
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
        >
          {theme === "light" ? (
            <Sun className="size-5.5" />
          ) : (
            <Moon className="size-5.5" />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}
