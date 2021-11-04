import React from 'react';

const JSX = () => {
  /* The below return statement is JSX - JavaScript XML*/
  /* This allows us to write HTML in JS */

  /* return (
    <div className="dummyClass">
      <h1>This is JSX Syntax</h1>
    </div>
  ); */
  /* Return Statement without JSX */
  return React.createElement(
    'div',
    { id: 'RandomId', className: 'dummyClass' },
    React.createElement('h1', null, 'This text is without JSX')
  );
};

export default JSX;
