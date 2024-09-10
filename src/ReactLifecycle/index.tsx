import React, { useState } from 'react';
import { RFC } from './RFC';
import RCC from './RCC';

export const ReactLifecycle = () => {
  const [showRFC, setShowRFC] = useState(false);
  const [showRCC, setShowRCC] = useState(false);

  return (
    <div className="border-2 border-white p-4 h-96 w-full">
      <h1 className="text-white text-2xl font-bold mb-6 border-b pb-4">React Lifecycle</h1>

      <div className="flex gap-4">
        <div>
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={() => setShowRFC(!showRFC)}
          >
            Toggle RFC
          </button>

          <div className="mt-4">{showRFC && <RFC />}</div>
        </div>

        <div>
          <button
            className="bg-red-500 text-white p-2 rounded-md"
            onClick={() => setShowRCC(!showRCC)}
          >
            Toggle RCC
          </button>

          <div className="mt-4">{showRCC && <RCC />}</div>
        </div>
      </div>
    </div>
  );
};
