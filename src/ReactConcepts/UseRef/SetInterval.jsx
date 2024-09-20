import { useRef } from 'react';

export const SetInterval = () => {
  const readingOperation = async () => {
    setTimeout(() => {
      console.log('async reading operation....');
    }, 1000);
  };

  const intervalId = useRef();

  const readingProcess = async () => {
    intervalId.current = setInterval(() => {
      readingOperation();
    }, 1000);
  };

  function start() {
    readingProcess();
  }

  function stop() {
    clearInterval(intervalId.current);
    console.log('-------- stopping the reading process -----');
  }

  return (
    <div className="flex flex-col gap-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => start()}
      >
        Start
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={() => stop()}
      >
        Stop
      </button>
    </div>
  );
};
