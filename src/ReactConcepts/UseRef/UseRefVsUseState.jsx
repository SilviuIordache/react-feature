import { useRef, useState } from 'react';

const UseRefVsUseState = () => {
  return (
    <div className="flex justify-between gap-4">
      <CounterWithUseState />
      <CounterWithUseRef />
    </div>
  );
};

const CounterWithUseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="border-2 border-green-500 p-4">
      <h1 className="text-2xl font-bold text-green-500 mb-4">
        State using useState
      </h1>
      <input type="number" onChange={(e) => setCount(e.target.value)} />
      <div className="mt-6">
        <p>count: {count}</p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={() => console.log(count)}
        >
          Log counter
        </button>
      </div>
    </div>
  );
};

const CounterWithUseRef = () => {
  const countRef = useRef(0);

  return (
    <div className="border-2 border-yellow-500 p-4">
      <h1 className="text-2xl font-bold text-yellow-500 mb-4">
        State using useRef
      </h1>
      <input
        type="number"
        onChange={(e) => (countRef.current = e.target.value)}
      />
      <div className="mt-6">
        <p>count: {countRef.current}</p>
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

export default UseRefVsUseState;
