import Button from "../Elements/Button";
import { useLogin } from "../../hooks/useLogin";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const username = useLogin();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10 gap-3">
      {username}
      <Button classname="bg-black" onClick={handleLogout}>
        Sign Out
      </Button>
      <Button
        className=" bg-black px-10 mx-5 text-white rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;
