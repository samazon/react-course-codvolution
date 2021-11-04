import React from 'react';
import PropsComponent from './PropsComponent';

const Person = () => {
  return (
    <>
      <PropsComponent name="John" age="37"></PropsComponent>
      <PropsComponent name="James" age="28">
        <button>Children</button>
      </PropsComponent>
    </>
  );
};

export default Person;
