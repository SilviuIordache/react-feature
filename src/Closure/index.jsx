import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const Closure = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1); // using the functional setState to avoid a stale closure
  }, []);

  return (
    <div className="border-2 border-green-500 p-4">
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

const ChildComponent = ({ onClick }) => (
  <div className="border-2 border-red-500 p-4">
    <button onClick={onClick}>Increment</button>
  </div>
);

ChildComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { Closure };
