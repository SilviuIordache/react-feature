import { useMemo, useState } from 'react';

export const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const themeStyle = {
    backgroundColor: darkTheme ? 'black' : 'white',
    color: darkTheme ? 'white' : 'black',
  };

  function changeTheme() {
    setDarkTheme(!darkTheme);
  }

  function slowFunction(num) {
    const start = performance.now();
    for (let i = 0; i < 1000000000; i++) {}

    const end = performance.now();
    console.log(`Slow function called. Duration: ${end - start} ms`);
    return num * 2;
  }

  // const doubleNumber = slowFunction(number);
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

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
    </div>
  );
};
