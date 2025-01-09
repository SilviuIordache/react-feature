import React, { useEffect } from 'react';
import useRenderIndicator from '../../hooks/useRenderIndicator';
import { RenderDisplayer } from '../../hooks/RenderDisplayer';
export const CountDisplayer = ({ count }: { count: number }) => {
  const showRerender = useRenderIndicator();

  useEffect(() => {
    console.log('Count Displayer re-rendered');
  });

  return (
    <div className="border-2 border-yellow-500 p-4 flex flex-col justify-between">
      <RenderDisplayer showRerender={showRerender} />

      <div className="text-yellow-500">Count Displayer</div>

      <p> {count}</p>
    </div>
  );
};
