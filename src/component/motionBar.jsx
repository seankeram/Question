const MotionBar = ({ width }) => {
  console.log(width);
  if (width === 110) {
    return (
      <div style={{ width: " 100%", paddingBottom: 30 }}>
        <div
          style={{
            backgroundColor: "green",
            height: 10,
            width: "100%",
            cursor: "pointer",
          }}
        ></div>
      </div>
    );
  } else {
    return (
      <div style={{ width: " 100%", paddingBottom: 30 }}>
        <div
          style={{
            backgroundColor: "red",
            height: 10,
            width: `${width}%`,
            cursor: "pointer",
          }}
        ></div>
      </div>
    );
  }
};
export default MotionBar;

// import React, { useState } from 'react';

// const ExampleComponent = () => {
//   const [width, setWidth] = useState(10);

//   const handleClick = () => {
//     setWidth(prevWidth => prevWidth + 10);
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "red",
//         height: 10,
//         width: `${width}%`,
//         cursor: "pointer"
//       }}
//       onClick={handleClick}
//     ></div>
//   );
// };

// export default ExampleComponent;
