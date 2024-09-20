import { useMemo, useState } from 'react';
import ChildComponent from './ChildComponent';

export const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

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
  const doubleNumber = useMemo(() => slowFunction(number), [number]);
  // const doubleNumber = slowFunction(number);

  function changeTheme() {
    setDarkTheme(!darkTheme);
  }

  function slowFunction(num) {
    const start = performance.now();
    for (let i = 0; i < 500000000; i++) {}

    const end = performance.now();
    console.log(`Slow function called. Duration: ${end - start} ms`);
    return num * 2;
  }

  return (
    <div style={{ textAlign: 'left' }}>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={changeTheme}
      >
        Change Theme
      </button>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <div style={themeStyle}>Double: {doubleNumber} </div>

      <ChildComponent style={themeStyle} />
    </div>
  );
};
