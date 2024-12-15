import PropTypes from 'prop-types';
import { useEffect } from 'react';

const ChildComponent = ({ style }) => {
  useEffect(() => {
    console.log('ChildComponent re-rendered');
  }, [style]);

  return (
    <div style={style}>
      <h1 className="text-2xl font-bold text-green-500">Child component</h1>
    </div>
  );
};

ChildComponent.propTypes = {
  style: PropTypes.object,
};

export default ChildComponent;
