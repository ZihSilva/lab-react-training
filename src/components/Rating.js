import React from "react";

function Rating(props) {
    let children = Math.round(props.children);
  
    if (children === 0) {
      children = "☆☆☆☆☆";
    } else if (children === 1) {
      children = "★☆☆☆☆";
    } else if (children === 2) {
      children = "★★☆☆☆";
    } else if (children === 3) {
      children = "★★★☆☆";
    } else if (children === 4) {
      children = "★★★★☆";
    } else if (children === 5) {
      children = "★★★★★";
    }
  
    return (
      <h1>{children}</h1>
    );
  }
  export default Rating;