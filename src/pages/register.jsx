import { useContext } from "react";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";
import { DarkMode } from "../context/DarkMode";

const RegisterPage = () => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className={`text-sm mt-5 text-center ${isDarkMode && "text-white"}`}>
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Sign in here
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
