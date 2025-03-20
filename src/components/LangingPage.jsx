import Home from "./Home";
import About from "./About";

const LandingPage = () => {
  return (
    <main className="flex flex-col mb-8">
      <Home />
      <About />
    </main>
  );
};

export default LandingPage;
