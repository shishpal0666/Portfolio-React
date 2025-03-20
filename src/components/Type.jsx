import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Type = () => {
  return (
    <div>
      <h1>
        <Typewriter
          words={[
            "Backend Developer",
            "React Developer",
            "MERN Stack Developer",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={60}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default Type;
