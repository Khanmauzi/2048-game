import React, { useState } from 'react';

function App() {
  const [data, setData] = useState ( [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ])
  return (
    <div
      style={{
        background: "#AD9D8F",
        width: "max-content",
        margin: "auto",
        padding: 5,
        borderRadius: 5,
        marginTop: 10
      }}>
      {data.map((row, oneIndex) => {
        return(
          <div style = {{ display: "flex"}} key = {oneIndex}>
            {row.map((digit, index) => (
              <Block num = {digit} key = {index} />
            ))}
          </div>
        )
      })}
    </div>
  );
 };
 const Block = ( {num}) => {
   const {blockStyle} = style;
  return (
    <div 
      style={{
        ...blockStyle,
       // background: getColors(num),
      }}>
      {num}
    </div>
  )
};

const style = {
  blockStyle: {
    height: 80,
    width: 80,
    background: "lightgray",
    margin: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 45,
    fontWeight: "800",
    color: "white"
  }
}

export default App;
