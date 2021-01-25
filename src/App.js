import React, { Component } from "react";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div data-test="component-app" className="container-outer">
      <h1 data-test="counter-display">
        {`Counter: `}
        <span data-test="count">{count}</span>
      </h1>
      <button
        data-test="increment-button"
        onClick={() => {
          setCount(count + 1);
          // console.log("Count: ", count);
        }}
      >
        Click Me
      </button>
    </div>
  );
}

// class App extends Component {
//   state = { count: 0 };

//   render() {
//     return (
//       <div data-test="component-app" className="container-outer">
//         <h1 data-test="counter-display">
//           {`Counter: `}
//           <span data-test="count">{this.state.count}</span>
//         </h1>
//         <button
//           data-test="increment-button"
//           onClick={() => {
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           Click Me
//         </button>
//       </div>
//     );
//   }
// }

export default App;
