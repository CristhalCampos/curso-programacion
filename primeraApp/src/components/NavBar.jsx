/*
ejemplo de como importar un archivo css
import "./../resources/styles.css";
*/

//importar contexto de tema
import { useContext } from "react";
import { ThemeContext } from "./../context/themeContext";

export default function NavBar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <nav className={`${darkMode ? "bg-slate-700" : "bg-blue-500"} ${darkMode ? "text-white" : "text-black"} flex justify-between items-center px-8 py-2`}>
      <div>
        <h1 className="font-bold text-3xl cursor-pointer">Logo</h1>
      </div>
      <div className="hidden md:flex items-center justify-center gap-4">
        <p className="hover:font-semibold transition-all duration-300 cursor-pointer">Home</p>
        <p className="hover:font-semibold transition-all duration-300 cursor-pointer">
          Products
        </p>
        <div className={`flex justify-center items-center px-1 border ${darkMode ? "border-white" : "border-black"} rounded-xl`}>
          <button className={`${darkMode ? "flex" : "hidden"}`} onClick={toggleDarkMode}>
            {darkMode ? "☀" : "🌙"}
          </button>
          <div className={`h-4 w-4 rounded-full ${darkMode ? "bg-white" : "bg-black"}`}></div>
          <button className={`${darkMode ? "hidden" : "flex"}`} onClick={toggleDarkMode}>
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>
      </div>
      <div className="flex md:hidden">
        <button>X</button>
      </div>
    </nav>
  );
}