import { useEffect, useState } from "react";

interface SideEffectProps {
    count: number;
}

export function SideEffect({count}: SideEffectProps) {
    const [color, setColor] = useState("red")

    useEffect(() => {
        setColor("red");
        const timeoutId = setTimeout(() => {
            setColor("green")
            console.log(`timeout triggered - ${timeoutId}`)
        }, 5000);
        console.log(`side effect fired - ${timeoutId}`)
        

        return () => {
            clearTimeout(timeoutId);
            console.log(`timeout cleared - ${timeoutId}`);
        }
    }, [count]);

    return <div style={{backgroundColor: color}}>SideEffect</div>;
}