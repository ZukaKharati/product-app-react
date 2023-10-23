import { useState } from "react";
import "./Counter.css";
import { CounterView } from "./CounterView";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = (inc) => {
    setCount(count + inc);
  };

  return (
    <div className="counter-container">
      <CounterView counter={count} />
      <button onClick={() => increment(+100)}>Increment</button>
      <button onClick={() => increment(-50)}>Decrement</button>
    </div>
  );
}

export default Counter;

// const [count2, setCount2] = useState(1000);

// useEffect(() => {
//   console.log("Calling useEffect in Counter");

//   return () => {
//     console.log("Cleanup of Counter useEffect");
//   };
// }, [count, count2]);

// useEffect(() => {
//   console.log("Reacting to change of count2!");
// }, [count2]);

// useEffect(() => {
//   console.log("Calling only once!");
// }, []);
// const increment = (message) => {
//   count += 1;
//   console.log(count);

//   return () => {
//     console.log(message);
//   }
// }

// import React, { useState } from "react";

// // don't change the Component name "App"
// export default function App() {
//   const [count, setCount] = useState(0);

//   // implement increment functionality
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Click me
//       </button>
//     </div>
//   );
// }
