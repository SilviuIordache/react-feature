import React, { useCallback, useState } from 'react';
import { ChildComponent } from './ChildComponent';
import { MemoisedChildComponent } from './MemoisedChildComponent';

export const UseCallback = () => {
  const [count, setCount] = useState(0);

  const expensiveFunction = useCallback(() => {
    for (let i = 0; i < 1000000000; i++) {}
    console.log('expensiveFunction called');
  }, []);

  return (
    <div className="border-2 border-blue-500 p-4">
      <h1 className="text-2xl font-bold">UseCallback Parent Component</h1>
      <div>const [count, setCount] = useState(0)</div>

      <div>{`const expensiveFunction = () => {}`}</div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Increase count
      </button>

      <div className="flex gap-4 mt-6">
        <ChildComponent count={count} />

        <MemoisedChildComponent expensiveHandler={expensiveFunction} />
      </div>
    </div>
  );
};
