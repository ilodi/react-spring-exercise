import React from "react";
import { useSpring, animated } from "react-spring";

//formas de render sin ayuda del padre
/*
1.- useState
2.- Array deconstructing,
3.- lift state up (delegar el re-render a un componente padre)
*/
export default function Estructura({ isMove, ...props }) {
  const animationMove = useSpring({
    transform: `translateX(${isMove ? 250 : 0}px)`,
    backgroundColor: `#${isMove ? "000" : "FA0"}`,
    color: `#${isMove ? "FFF" : "000"}`,
  });
  //   const [isOn, setOn] = useState(false);

  //   const clickHandler = (e) => {
  //     setOn((lasState) => !lasState);
  //   };

  //animated
  //tags animados son iguales a html

  //config
  //cuenta con animaciones por defecto

  //useSpring
  //interpola valores de a A a B
  //llevar un valor css 0 a un valor arriba

  //esta variable almacena info de la animación
  //necesita valores Css de inicio y de fin
  //to valores finales
  //from valores de inicio
  //si no pones un from se usaran los valores de css
  //   const animation = useSpring({
  //     to: {
  //       backgroundColor: isOn ? "red" : "green",
  //       opacity: isOn ? 0 : 1,
  //     },
  //     // from: {
  //     //   backgroundColor: "yellow",
  //     //   opacity: 0,
  //     // },
  //     config: config.gentle,
  //   });
  //set genera valores finales

  //   const [animation, set, stop] = useSpring(() => ({
  //     backgroundColor: "green",
  //     opacity: 0,
  //   }));

  //   const clickHandler = (e) => {
  //     set({
  //       backgroundColor: "red",
  //       opacity: 1,
  //     });
  //   };

  return (
    <animated.div style={animationMove} className="componente-prueba">
      soy un div
    </animated.div>
  );
}
