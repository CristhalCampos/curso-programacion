/*
ejemplo de como importar un archivo css
import "./../resources/styles.css";
*/
import { useState } from "react";

export default function NavBar() {
    const [icon1, setIcon1] = useState(<div className="w-4 h-4 rounded-full bg-white"></div>);
    const [icon2, setIcon2] = useState('🌙');
    const backgroundMod = ["bg-slate-700", "bg-blue-500"];
    const [colorMod, setColorMod] = useState(0);
    const backgroundNav = ["bg-blue-500", "bg-slate-700"];
    const [colorNav, setColorNav] = useState(0);
    const bgColor = ["bg-black", "bg-white"];
    const [i1, setBgColor] = useState(0);
    const textColor = ["textblack", "text-white"];
    const [i2, setTextColor] = useState(0);
    const bordColor = ["borderblack", "border-white"];
    const [i3, setBordColor] = useState(0);
    const iconClick1 = () => {
      setIcon1(icon1 === '☀' ? <div className="w-4 h-4 rounded-full bg-white"></div> : '☀');
      setIcon2(icon2 === '🌙' ? <div className="w-4 h-4 rounded-full bg-white"></div> : '🌙');
      if (icon1 === '☀') {
        setColorNav(0);
        setColorMod(0);
        setTextColor(0);
      } else {
        setColorNav(1);
        setColorMod(1);
        setTextColor(1);
      }
    }
    const iconClick2 = () => {
      setIcon2(icon2 === '🌙' ? <div className="w-4 h-4 rounded-full bg-white"></div> : '🌙');
      setIcon1(icon1 === '☀' ? <div className="w-4 h-4 rounded-full bg-white"></div> : '☀'); 
      if (icon2 === '🌙') {
        setColorNav(1);
        setColorMod(1);
        setTextColor(1);
      } else {
        setColorNav(0);
        setColorMod(0);
        setTextColor(0);
      }
    }
    return (
      <nav className={`${backgroundNav[colorNav]} ${textColor[i2]} flex justify-between items-center px-8 py-4`}>
        <div>
          <h1 className="font-bold text-3xl cursor-pointer">Logo</h1>
        </div>
        <div className="hidden md:flex items-center justify-center gap-4">
          <p className="hover:font-semibold transition-all duration-300 cursor-pointer">Home</p>
          <p className="hover:font-semibold transition-all duration-300 cursor-pointer">
            Products
          </p>
        </div>
        <div className="flex md:hidden">
          <button>X</button>
        </div>
        <div className={`flex justify-between items-center ${backgroundMod[colorMod]} rounded-xl border px-1`}>
          <button onClick={() => {iconClick1()}}>
            {icon1}
          </button>
          <button onClick={() => {iconClick2()}}>
            {icon2}
          </button>
        </div>
      </nav>
    );
  }