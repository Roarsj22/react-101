import { useRef } from "react";

export function RenderCounter() {
  // useRef returns a mutable object that persists for the lifetime of the component
  // Updating the current property of the object does not trigger a re-render
  // So we can use it to count the number of times the component has rendered
  const renderCount = useRef(0);
  renderCount.current += 1;
  return <div>Render count: {renderCount.current}</div>;
}
