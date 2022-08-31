 import React from 'react';
 
function BoxColor(props) {
  const inline = { backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` };
  return (
    <div style={inline} className="box-color">
      <p >
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
}
export default BoxColor;