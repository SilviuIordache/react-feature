import React, { useEffect } from 'react';
import useRenderIndicator from '../../hooks/useRenderIndicator';

interface MethodCallerProps {
  expensiveHandler: () => void;
}

export const MethodCaller = React.memo(
  ({ expensiveHandler }: MethodCallerProps) => {
    const showRerender = useRenderIndicator();

    useEffect(() => {
      console.log(
        'MethodCaller re-rendered. The expensiveHandler prop has changed'
      );
    }, [expensiveHandler]);

    return (
      <div className="border-2 border-green-500 p-4">
        <div className="mb-6">
          <div className="text-green-500">Method Caller</div>
          <div className="text-purple-500">memoised</div>
        </div>

        {showRerender && <div>Re-render</div>}

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
