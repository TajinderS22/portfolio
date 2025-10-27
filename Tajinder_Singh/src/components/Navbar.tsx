import { useEffect, useState } from "react";
import ThemeToggle from "./ToggleTheme";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-4  max-w-[1920px] z-40 not-md:hidden dark:text-white shadow-2xl rounded-[200px] mx-auto flex transition-all duration-700 ease-in-out ${
        isScrolled ? ' w-4/12 min-w-[500px]':"w-8/12"
      }`}
    >
      <div
        className={`flex justify-between z-20 dark:bg-indigo-400/30 items-center m-auto rounded-[200px] shadow-md backdrop-blur-sm px-6 p-4 transition-all duration-700 ease-in-out ${
          isScrolled ? "bg-gray-300/50" : "bg-gray-300/50"
        } ${isScrolled ? "md:p-3 p-3" : "md:p-4 p-4"} w-full`}
      >
        <div className= {`md:text-3xl z-20 dark:text-indigo-300 text-2xl drop-shadow-xl mx-2 ${isScrolled&& "hidden"} transition-all duration-250 ease-in-out font-bold text-gray-800`}>
          Tajinder Singh
        </div>
        <div className={`list-none ${isScrolled && 'mx-auto'}  text-xl hidden md:flex gap-6`}>
          <a href="#Skills"><li className="text-md mx-1">Skills</li></a>
          <a href="#Education"><li className="text-md mx-1">Education</li></a>
          <a href="#Projects"><li className="text-md mx-1">Projects</li></a>
          <a href="#Contact"><li className="text-md mx-1">Contact</li></a>
          
            <ThemeToggle />

        </div>
      </div>
    </div>
  );
}
