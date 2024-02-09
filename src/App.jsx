// import React from "react";

// class component

// class Button extends React.Component {
//   render() {
//     return (
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//         Click me
//       </button>
//     );
//   }
// }

// functional component
// function ButtonBlack() {
//   return (
//     <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//       Click me
//     </button>
//   );
// }

const Button = (props) => {
  const { children = "Click me", variant = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} hover:brightness-110 text-white`}
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-slate-400 min-h-screen items-center">
      <div className="flex gap-x-3">
        {/* <Button></Button>
        <ButtonBlack></ButtonBlack> */}
        <Button variant="bg-red-500">Login</Button>
        <Button variant="bg-blue-500">Register</Button>
        <Button variant="bg-gray-500">Logout</Button>
        <Button variant="bg-zinc-300">Buy Now</Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
