import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Login() {
  const [move, setMove] = useState(false);

  const animationMove = useSpring({
    from: {
      left: `${!move ? "5%" : "50%"}`,
    },

    left: `${move ? "5%" : "50%"}`,
  });

  const clickHandler = (e) => {
    setMove((lasState) => !lasState);
  };
  const animationFormMove = useSpring({
    from: {
      transform: `translate(${!move ? -100 : 0}%)`,
    },

    transform: `translate(${move ? -100 : 0}%)`,
  });

  return (
    <div className="main-container">
      <div className="main-container__option-toggle">
        <h3>Have an account?</h3>
        <button type="button" className="button-toggle" onClick={clickHandler}>
          Log in
        </button>
      </div>
      <div className="main-container__option-toggle" onClick={clickHandler}>
        <h3>Don't have an account?</h3>
        <button type="button" className="button-toggle">
          Sign up
        </button>
      </div>

      <animated.div
        style={animationMove}
        className="main-container__option-viewport"
      >
        <animated.div
          style={animationFormMove}
          className="main-container__option-form"
        >
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Full name"></input>
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="Password"></input>
          <button type="button" className="button-action">
            Register
          </button>
        </animated.div>
        <animated.div
          style={animationFormMove}
          className="main-container__option-form"
        >
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="Password"></input>
          <button type="button" className="button-action">
            Login
          </button>
        </animated.div>
      </animated.div>
    </div>
  );
}
