import React from 'react';

const Person = ({ person }) => {
  return (
    <div>
      <h1>Hi, My name is {person.first_name}</h1>
    </div>
  );
};

export default Person;
