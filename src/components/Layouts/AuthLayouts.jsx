import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
  const { children, title } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode
          ? "transition-colors bg-slate-900"
          : "transition-colors bg-white"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p
          className={`font-medium text-slate-500 mb-8 ${
            isDarkMode && "text-white"
          }`}
        >
          Welcome, Please enter your details
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
