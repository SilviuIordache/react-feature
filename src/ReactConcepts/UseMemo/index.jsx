import { useEffect, useMemo, useState } from 'react';
import ChildComponent from './ChildComponent';

export const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    console.log('Parent component re-rendered');
  });

  // useMemo used for reference equality;
  // Avoids unnecessary re-renders in child components that use the theme style as a prop
  const themeStyle = useMemo(
    () => ({
      backgroundColor: darkTheme ? 'black' : 'white',
      color: darkTheme ? 'white' : 'black',
    }),
    [darkTheme]
  );

  // const themeStyle = {
  //   backgroundColor: darkTheme ? 'black' : 'white',
  //   color: darkTheme ? 'white' : 'black',
  // };

  // useMemo used for caching the result of a slow function
  // without it, if you change the theme, it will re-run
  const doubleNumber = useMemo(() => slowFunction(number), [number]);
  // const doubleNumber = slowFunction(number);

  function changeTheme() {
    setDarkTheme(!darkTheme);
  }

  function slowFunction(num) {
    const start = performance.now();
    for (let i = 0; i < 900000000; i++) {
      /* empty */
    }

    const end = performance.now();

    const durationInSeconds = ((end - start) / 1000).toFixed(3); // Convert ms to seconds and format to 1 decimal place
    console.log(`Slow function called. Duration: ${durationInSeconds}s`);

    return num * 2;
  }

  return (
    <div
      style={{ textAlign: 'left' }}
      className="flex flex-col gap-4 border-2 border-blue-500 p-4"
    >
      <h1 className="text-2xl font-bold text-blue-500">Parent component</h1>
      <div className="display-block">
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={changeTheme}
        >
          Change Theme
        </button>
      </div>

      <input
        style={themeStyle}
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <div style={themeStyle}>Double: {doubleNumber} </div>

      <ChildComponent style={themeStyle} />
    </div>
  );
};
