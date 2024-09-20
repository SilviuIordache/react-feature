import { useEffect, useLayoutEffect, useState } from 'react';

export const RFC = () => {
  // simulate constructor
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  // simulate componentDidMount
  useLayoutEffect(() => {
    console.log('RFC: Before render');
  }, []);

  // simulate componentDidUpdate
  useEffect(() => {
    console.log('RFC: After render');
  }, [dark]);

  // simulate componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('RFC: Before unmount');
    };
  }, []);

  // simulate render
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md"
      onClick={() => setDark(!dark)}
      style={theme}
    >
      RFC
    </button>
  );
};
