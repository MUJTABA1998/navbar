import "./App.css";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full h-auto bg-white drop-shadow-lg">
      <div className="items-center justify-between md:flex py-7 md:px-12 px-7">
        <div>
          <h1 className="text-3xl font-extrabold tracking-widest text-secondary">
            Speecto
          </h1>
        </div>
        <ul
          className={`absolute items-center  w-full md:w-auto gap-5 md:ml-0 ml-[-28px] px-10 md:px-0 py-10 md:py-0 bg-white my-7 md:flex md:static md:my-0 ${
            show ? "top-[40px] " : "top-[-400px]"
          } transition-all duration-300 ease-in `}
        >
          <li className="mb-5 md:mb-0">
            <a href="/">Home</a>
          </li>
          <li className="mb-5 md:mb-0">
            <a href="/">Services</a>
          </li>
          <li className="mb-5 md:mb-0">
            <a href="/">Blog</a>
          </li>
          <li className="mb-5 md:mb-0">
            <a href="/">About</a>
          </li>
          <li className="mb-5 md:mb-0">
            <a href="/">Contact</a>
          </li>
        </ul>
        <ul className="flex-row items-center hidden gap-5 md:flex">
          <li>
            <a href="/">
              <ImFacebook />
            </a>
          </li>
          <li>
            <a href="/">
              <ImInstagram />
            </a>
          </li>
          <li>
            <a href="/">
              <ImTwitter />
            </a>
          </li>
        </ul>
        <button
          className="absolute flex items-center text-3xl transition-all duration-500 ease-in top-8 right-10 md:hidden"
          onClick={() => setShow(!show)}
        >
          {show ? <CgClose /> : <GiHamburgerMenu />}
        </button>
      </div>
    </div>
  );
}

export default App;
