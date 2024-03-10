import { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function ReactComponent({ children }: Props) {
  const [count, setCount] = useState<number>(0);
  console.log(`React: The initial count is ${count}.`);

  const increment = () => {
    setCount(count + 1);
    console.log(`React: The initial count is ${count}.`);
  };

  return (
    <p>
      {children}:&nbsp;
      <button onClick={increment}>Clicked {count} times</button>
    </p>
  );
}
