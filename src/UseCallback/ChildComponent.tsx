import React, { useEffect } from 'react';

export const ChildComponent = ({ count }) => {
  useEffect(() => {
    console.log(
      'ChildComponent re-rendered. The count prop has changed'
    );
  }, [count]);

  return (
    <div className="border-2 border-yellow-500 p-4">
      <div>ChildComponent</div>

      <p>Count: {count}</p>
    </div>
  );
};
