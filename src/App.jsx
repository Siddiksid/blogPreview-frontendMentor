import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BlogComponent from "./BlogComponent";

function App() {
  return (
    <div className="bg-[#F6D050] flex justify-center w-full h-screen">
      <BlogComponent />
    </div>
  );
}

export default App;
