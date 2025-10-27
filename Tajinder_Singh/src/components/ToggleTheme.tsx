import  { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

function ThemeToggle() {
  // 1. Get the theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // 2. Use an effect to update the <html> tag and localStorage
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // 3. Save the user's preference in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // Only re-run this effect when the 'theme' state changes

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={toggleTheme} className='transition-all bg-purple-200/20 border rounded-full w-12  duration-500 ease-in-out' >
      {theme === 'light' ? 
      <div className='flex '>
        <Moon className='hover:rotate-20 transition-all duration-500 ease-in-out' />
      </div> : <Sun className='transition-all duration-500 translate-x-5 ease-in-out hover:rotate-90'/>}
    </button>
  );
}

export default ThemeToggle;