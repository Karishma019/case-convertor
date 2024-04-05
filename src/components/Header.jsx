import { MdNightlight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Header({ mode, toggleMode }) {
  const changeMode = () => {
    if (mode === "light") {
      mode = "dark";
    } else {
      mode = "light";
    }
    console.log(mode);
    return toggleMode(mode);
  };

  return (
    <header
      className={` ${
        mode === "dark"
          ? "text-white bg-slate-900 shadow-lg shadow-slate-700/50"
          : "text-slate-700 bg-white shadow-lg"
      }`}
    >
      <div className="container h-24 flex items-center justify-between">
        <h1>
          <span className="text-4xl font-bold -sm:text-3xl">
            Case Converter
          </span>
          <p className="text-lg -sm:text-sm">Your Handy FREE Online Tool!</p>
        </h1>
        <button
          className={`text-2xl p-2 rounded-lg ${
            mode === "light" ? "bg-slate-100" : "bg-slate-800"
          }`}
          onClick={changeMode}
        >
          {mode === "light" ? <MdNightlight /> : <MdLightMode />}
        </button>
      </div>
    </header>
  );
}

export default Header;
