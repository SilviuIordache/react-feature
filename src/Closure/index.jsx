import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const Closure = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1); // using the functional setState to avoid a stale closure
  }, []);

  return (
    <div className="border-2 border-green-500 p-4">
      <div className="mb-6">
        <p className="text-green-500 mb-4 text-lg font-semibold">
          Parent Component
        </p>
        <p>Count: {count}</p>
      </div>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

const ChildComponent = ({ onClick }) => (
  <div className="border-2 border-blue-500 p-4">
    <p className="text-blue-500 mb-4 text-lg font-semibold">Child Component</p>
    <button
      className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 active:bg-blue-700 active:scale-95 transition-all duration-150"
      onClick={onClick}
    >
      Increment
    </button>
  </div>
);

ChildComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { Closure };
