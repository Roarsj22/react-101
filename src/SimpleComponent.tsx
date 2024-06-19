import { useState } from "react";

interface SimpleComponentProps {
  text: string;
}

export function StatelessComponent({ text }: SimpleComponentProps) {
  return <div>{text}</div>;
}

export function StatefulComponent({ text }: SimpleComponentProps) {
  const [inputText, setInputText] = useState(text);

  return (
    <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
  );
}
