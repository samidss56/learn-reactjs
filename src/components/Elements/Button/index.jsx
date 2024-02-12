const Button = (props) => {
  const {
    children = "Click me",
    classname = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} hover:brightness-110 text-white`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
