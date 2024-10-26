import NavigationBar from "./NavigationBar";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";


import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="container">
        <Routes>
          {<Route path="/" element={<Home />}></Route>}
          {<Route path="/about" element={<About />}></Route>}
          {<Route path="/projects" element={<Projects />}></Route>}
          {<Route path="/contacts" element={<Contacts />}></Route>}
        </Routes>
      </div >
    </>
  )
}

export default App
