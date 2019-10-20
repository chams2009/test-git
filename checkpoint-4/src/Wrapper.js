import React from "react";
function Wrapper(props) {
  return <>{props.children}</>;
}

export function Photo(props) {
  return <img src={props.src} alt="The toff" />;
}
export function Title(props) {
  return <h1 style={props.style}>{props.children}</h1>;
}
export default Wrapper;
