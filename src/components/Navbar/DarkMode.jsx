import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
import { useState, useEffect } from "react";


function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light" 
  );

  // Access HTML elements
  const element = document.documentElement;
  console.log(element);

  // Set theme to local storage and html element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("light");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  })
  
  return (
    <div className="relative">
      <img
        src={LightButton}
        alt="Theme toggle button"
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />

      <img
        src={DarkButton}
        alt="Theme toggle button"
        className={`w-12 cursor-pointer right-0 z-10`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
}

export default DarkMode;
