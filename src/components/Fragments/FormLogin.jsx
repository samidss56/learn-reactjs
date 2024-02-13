import { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@mail.com"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="*********"
      />

      <Button classname="bg-blue-600 w-full" type="submit">
        Sign in
      </Button>
    </form>
  );
};

export default FormLogin;
