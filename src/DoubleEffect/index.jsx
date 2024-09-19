import { useEffect, useState } from 'react';

export const DoubleEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect running, current count: ', count);
  }, [count]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Double Effect</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded-md mb-4"
        onClick={() => setCount(count + 1)}
      >
        Increment count
      </button>
      <p>Count: {count}</p>
    </div>
  );
};
