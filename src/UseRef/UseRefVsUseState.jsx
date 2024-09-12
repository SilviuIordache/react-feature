import { useRef, useState } from 'react';

export const UseRefVsUseState = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="border-2 border-green-500 p-4">
        <h1 className="text-2xl font-bold text-green-500">
          State using useState
        </h1>
        <input type="number" onChange={(e) => setCount(e.target.value)} />
        <p>useState Count: {count}</p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={() => console.log(count)}
        >
          Log counter
        </button>
      </div>

      <div className="border-2 border-yellow-500 p-4">
        <h1 className="text-2xl font-bold text-yellow-500">
          State using useRef
        </h1>
        <input
          type="number"
          onChange={(e) => (countRef.current = e.target.value)}
        />
        <p>useRef Count: {countRef.current}</p>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-md"
          onClick={() => console.log(countRef.current)}
        >
          Log counter
        </button>
      </div>
    </div>
  );
};
