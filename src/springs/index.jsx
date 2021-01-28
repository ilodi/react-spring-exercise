import React, { useState } from "react";
import { useSprings, animated } from "react-spring";

// useSprings
// 1.- Cantidad de elementos a animar
// 2.- La información sobre los objetos de animaciones
export default function Springs({ isMove, ...props }) {
  const dataToShow = [
    "al",
    "el",
    "ol",
    "il",
    "ul",
    "ma",
    "me",
    "mi",
    "mo",
    "mu",
  ];
  //map regresa un elemento, un item o el mismo array
  const appearAnimations = useSprings(
    dataToShow.length,
    dataToShow.map((item, index, arrayItSelf) => ({
      from: { opacity: isMove ? 1 : 0, transition: `${index * 100}ms` },
      opacity: !isMove ? 1 : 0,
    }))
  );
  return (
    <div className="list-container">
      <ul className="list-items">
        {dataToShow &&
          dataToShow.map((item, index) => (
            <animated.li style={appearAnimations[index]}>{item}</animated.li>
          ))}
      </ul>
    </div>
  );
}
