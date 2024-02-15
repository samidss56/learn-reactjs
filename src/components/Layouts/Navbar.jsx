import Button from "../Elements/Button";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";

const Navbar = () => {
  const username = useLogin();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
      {username}
      <Button classname="ml-5 bg-black" onClick={handleLogout}>
        Sign Out
      </Button>
    </div>
  );
};

export default Navbar;
