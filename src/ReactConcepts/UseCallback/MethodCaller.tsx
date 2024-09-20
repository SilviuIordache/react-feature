import React, { useEffect } from 'react';

interface MethodCallerProps {
  expensiveHandler: () => void;
}

export const MethodCaller = React.memo(
  ({ expensiveHandler }: MethodCallerProps) => {
    useEffect(() => {
      console.log(
        'MethodCaller re-rendered. The expensiveHandler prop has changed'
      );
    }, [expensiveHandler]);

    return (
      <div className="border-2 border-green-500 p-4">
        <div className="mb-6">
          <div className='text-green-500'>Method Caller</div>
          <div className='text-purple-500'>memoised</div>
        </div>
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
