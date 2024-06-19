import { useMemo } from "react";

function anExpensiveFunction() {
  // Do something expensive
  alert('Expensive function called');
  return 5;
}

export function Memoised() {
    // useMemo caches the result of a calculation between re-renders
    const memoisedValue = useMemo(() => {
        return anExpensiveFunction();
    }, []);

    return <div>{memoisedValue}</div>;
}