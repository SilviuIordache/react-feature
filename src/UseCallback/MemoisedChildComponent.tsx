import React, { useEffect } from 'react';

interface MemoisedChildComponentProps {
  expensiveHandler: () => void;
}

export const MemoisedChildComponent = React.memo(
  ({ expensiveHandler }: MemoisedChildComponentProps) => {
    useEffect(() => {
      console.log(
        'MemoisedChildComponent re-rendered. The expensiveHandler prop has changed'
      );
    }, [expensiveHandler]);

    return (
      <div className="border-2 border-green-500 p-4">
        <div>MemoisedChildComponent</div>
        <button
          className="bg-green-500 text-white p-2 rounded-md"
          onClick={expensiveHandler}
        >
          Call Expensive
        </button>
      </div>
    );
  }
);
