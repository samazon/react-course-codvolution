import React from 'react';

const PropsComponent = (props) => {
  const { name, age, children } = props;
  return (
    <div>
      <h1>
        Hi My name is {name} and I am {age} years old!
      </h1>
      {children}
    </div>
  );
};

export default PropsComponent;
