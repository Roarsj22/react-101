import { memo, useCallback, useState } from "react";
import { RenderCounter } from "./RenderCounter";

export function Callback() {
    const [count, setCount] = useState(0);
    
    const handleClick = useCallback(() => setCount((prevCount) => prevCount + 1), []);

    // const handleClick = () => setCount((prevCount) => prevCount + 1);

    return (
        <>
        <p>Callback called: {count}</p>
        <ExpensiveChild onClick={handleClick} />
        </>
    )
}

interface ExpensiveChildProps {
    onClick: () => void;
}

const ExpensiveChild = memo(function Child({onClick}: ExpensiveChildProps) {
    // Imagine this component is expensive to render

    const startTime = performance.now();
    while (performance.now() - startTime < 2000) {
        // Artificial delay
    }

    return (
        <>
        <RenderCounter/>
        <button onClick={onClick}>Submit</button>
        </>
    )
})