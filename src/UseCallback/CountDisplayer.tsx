import React, { useEffect } from 'react';

export const CountDisplayer = ({ count }) => {

  useEffect(() => {
    console.log('Count Displayer re-rendered');
  });


  return (
    <div className="border-2 border-yellow-500 p-4 flex flex-col justify-between">
      <div className='text-yellow-500'>Count Displayer</div>

      <p> {count}</p>
    </div>
  );
};
