import { useState } from "react";
import "./App.css";
import { RenderCounter } from "./RenderCounter";
import { StatefulComponent, StatelessComponent } from "./SimpleComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RenderCounter />

      {/* <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        count is {count}
      </button> */}

      {/* <TodoList/> */}

      {/* <Memoised/> */}

      {/* <Callback/> */}

      {/* <SideEffect count={count}/> */}

      <StatelessComponent text="some text"/>

      <StatefulComponent text="initial text"/>

    </>
  );
}

export default App;
