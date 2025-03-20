import { BrowserRouter, Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/LangingPage";
import Home from "./components/Home";
import ExperiencePage from "./components/ExperiencePage";
import Resume from "./components/Resume";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LandingPage from "./components/LangingPage";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter basename="/">
      <div className="relative overflow-x-hidden">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project" element={<ExperiencePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
