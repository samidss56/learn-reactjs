import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        name="fullname"
        type="text"
        placeholder="Enter your Fullname"
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
        name="ConfirmPassword"
        type="password"
        placeholder="*********"
      />

      <Button classname="bg-blue-600 w-full">Sign Up</Button>
    </form>
  );
};

export default FormRegister;
