interface CounterProps {
  count: number;
  onClick: () => void;
}

export function Counter({count, onClick}: CounterProps) {

  return (
    <button onClick={onClick}>
      Count is {count}
    </button>
  );
}
