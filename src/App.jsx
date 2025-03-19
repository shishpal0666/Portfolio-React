import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect } from "react";
import "./App.css";
import Body from "./components/Body";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Error from "./components/Error";

const App = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <BrowserRouter basename="/">
        <Routes path="/" element={<Body />}>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
