import React, { useCallback, useState } from 'react';
import { AnimalDisplayer } from './AnimalDisplayer';
import { CountDisplayer } from './CountDisplayer';
import { MethodCaller } from './MethodCaller';
import useRenderIndicator from '../../hooks/useRenderIndicator';
import { RenderDisplayer } from '../../hooks/RenderDisplayer';

export const UseCallback = () => {
  const showRerender = useRenderIndicator();

  const [count, setCount] = useState(0);
  const [animal, setAnimal] = useState('dog');

  // TODO: rename this; its irrelevant if the function is expensive or not
  const expensiveFunction = useCallback(() => {
    for (let i = 0; i < 1000000000; i++) {}
    console.log('expensiveFunction called');
  }, []);

  // const expensiveFunction = () => {
  //   for (let i = 0; i < 1000000000; i++) {}
  //   console.log('expensiveFunction called');
  // };

  return (
    <div className="border-2 border-white-500 p-4">
      <RenderDisplayer showRerender={showRerender} />
      <h1 className="text-2xl font-bold mb-24">Parent Component</h1>

      <div className="mt-2 flex justify-center ">
        <div className="text-left w-96"></div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <button
          className="bg-yellow-500 text-white p-2 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Increase count
        </button>

        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={() => setAnimal(animal === 'dog' ? 'cat' : 'dog')}
        >
          Change animal
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div>
          <div className="text-yellow-500">
            const [count, setCount] = useState(0)
          </div>
        </div>

        <div>
          <div className="text-blue-500">
            const [animal, setAnimal] = useState('dog')
          </div>
        </div>

        <div className="text-green-500">{`const expensiveFunction = () => {...}`}</div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <CountDisplayer count={count} />

        <AnimalDisplayer animal={animal} />

        <MethodCaller expensiveHandler={expensiveFunction} />
      </div>
    </div>
  );
};
