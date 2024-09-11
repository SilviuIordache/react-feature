import PropTypes from 'prop-types';
import { useEffect } from 'react';

const ChildComponent = ({ style }) => {
  useEffect(() => {
    console.log('ChildComponent rendered');
  }, [style]);
  
  return <div style={style}>ChildComponent</div>;
};

ChildComponent.propTypes = {
  style: PropTypes.object,
};

export default ChildComponent;
