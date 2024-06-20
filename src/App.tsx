import "./App.css";
import { RenderCounter } from "./RenderCounter";
import { Counter } from "./Counter";
import { useEffect, useState } from "react";
import { SideEffect } from "./SideEffect";

const useCustomHook = () => {
  useEffect(() => {
    console.log("mounted");
  }, []);

};

function App() {
  useCustomHook();
  const [count, setCount] = useState(0);


  return (
    <>
      <RenderCounter />

      <Counter count={count} onClick={() => setCount(prevCount => prevCount + 1)}/>

      {/* <TodoList/> */}

      {/* <Memoised/> */}

      {/* <Callback/> */}

      <SideEffect count={count}/>

      {/* <StatelessComponent text="some text"/>

      <StatefulComponent text="initial text"/> */}
    </>
  );
}

export default App;
