import React, { useEffect } from 'react';
import useRenderIndicator from '../../hooks/useRenderIndicator';

interface AnimalDisplayerProps {
  animal: string;
}
export const AnimalDisplayer = React.memo(
  ({ animal }: AnimalDisplayerProps) => {
    const showRerender = useRenderIndicator();

    useEffect(() => {
      console.log('AnimalDisplayer re-rendered');
    });

    return (
      <div className="border-2 border-blue-500 p-4 flex flex-col justify-between">
        <div>
          <div className=" text-blue-500">Animal Displayer</div>
          {showRerender && <div>Re-render</div>}

          <div className="text-purple-500">memoized</div>
        </div>

        <p> {animal}</p>
      </div>
    );
  }
);
