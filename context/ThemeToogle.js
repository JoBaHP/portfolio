import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const ThemeToogle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
      <button
        className="    dark:bg-black dark:text-gray-100 w-full h-16 z-20  border-t-2 border-white
            fixed left-0 bottom-0
            flex justify-center items-center
            text-white text-2xl"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle Dark Mode"
      >
        {theme === "light" ? (
          <BsFillMoonStarsFill className="text-blue-500 w-5 h-5" />
        ) : (
          <BsFillSunFill className="text-blue-400 w-5 h-5" />
        )}
      </button>
    </IconContext.Provider>
  );
};

export default ThemeToogle;
