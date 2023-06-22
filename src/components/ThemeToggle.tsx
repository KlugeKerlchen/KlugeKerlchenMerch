import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  //TODO make a button with svg drawing, using framer motion
  return (
    <button
      onClick={handleClick}
      className="p-2 transition-colors duration-200 hover:bg-gray-200"
    ></button>
  );
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 }, //TODO maybe remove opacity
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
    },
  },
};
