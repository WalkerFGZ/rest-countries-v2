import { IoMoonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <header className="bg-white dark:bg-dark-blue-elements dark:text-white w-full flex justify-center px-10 items-center h-20">
      <div className="max-w-1440 w-full flex justify-between">
        <h1
          className="text-3xl font-bold cursor-pointer"
          onClick={() => goToHome()}
        >
          Where in the world?
        </h1>
        <div className="flex items-center gap-3 cursor-pointer">
          <IoMoonOutline size={22} />
          <p className="text-lg font-semibold" onClick={() => toggleDarkMode()}>
            Dark Mode
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
