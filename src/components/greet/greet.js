import React from "react";

const Greet = (props) => {
  return <div>Hello {props.name ? props.name : "Greet"}</div>;
};

export default Greet;
