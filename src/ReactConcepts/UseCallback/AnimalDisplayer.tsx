import React, { useEffect } from 'react';
import useRenderIndicator from '../../hooks/useRenderIndicator';
import { RenderDisplayer } from '../../hooks/RenderDisplayer';

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
        <RenderDisplayer showRerender={showRerender} />

        <div>
          <div className=" text-blue-500">Animal Displayer</div>

          <div className="text-purple-500">React.memo</div>
        </div>

        <p> {animal}</p>
      </div>
    );
  }
);
