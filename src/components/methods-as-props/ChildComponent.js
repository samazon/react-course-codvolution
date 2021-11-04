import React from 'react';

const ChildComponent = ({ changeName }) => {
  return (
    <div>
      <button onClick={() => changeName()}>Click</button>
    </div>
  );
};

export default ChildComponent;
