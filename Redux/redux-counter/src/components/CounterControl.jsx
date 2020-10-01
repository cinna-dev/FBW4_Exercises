import React from 'react';

const CounterControl = props => {
  return (
    <div className='CounterControl' onClick={props.clickhandler}>
      {props.label}
    </div>
  );
};

export default CounterControl;
