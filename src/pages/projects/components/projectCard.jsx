import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Styled from "styled-components";

function Card(props) {
  const CardFront = Styled.div`
    height: 100%;
    width: 100%:
    margin: 0px;
    padding: 0px;
    border-radius: 4%;
    background-size: cover;
    background-image: url(${props.imgSrc});
`;

  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <div onClick={() => set(state => !state)} id="cardContainer">
      <animated.div
        id="card"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <CardFront />
      </animated.div>
      <animated.div
        id="card"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      >
        {props.children}
      </animated.div>
    </div>
  );
}

export default Card;
