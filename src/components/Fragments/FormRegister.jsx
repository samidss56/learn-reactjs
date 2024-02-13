import { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    localStorage.setItem("fullname", event.target.fullname.value);
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    localStorage.setItem("confirmPassword", event.target.confirmPassword.value);
    window.location.href = "/login";
    localStorage.clear();
  };
  const fullnameRef = useRef(null);

  useEffect(() => {
    fullnameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleRegister}>
      <InputForm
        label="Fullname"
        name="fullname"
        type="text"
        placeholder="Enter your Fullname"
        ref={fullnameRef}
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="*********"
      />
      <InputForm
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="*********"
      />

      <Button classname="bg-blue-600 w-full" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default FormRegister;
