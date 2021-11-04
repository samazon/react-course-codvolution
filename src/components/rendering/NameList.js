import React from 'react';
import Person from './Person';

const NameList = () => {
  const persons = [
    {
      id: 1,
      first_name: 'Ainslie',
      last_name: 'Landes',
      email: 'alandes0@canalblog.com',
      gender: 'Genderfluid',
    },
    {
      id: 2,
      first_name: 'Tamara',
      last_name: 'Matyushkin',
      email: 'tmatyushkin1@bloomberg.com',
      gender: 'Genderqueer',
    },
    {
      id: 3,
      first_name: 'Gardener',
      last_name: 'Tenney',
      email: 'gtenney2@hibu.com',
      gender: 'Bigender',
    },
    {
      id: 4,
      first_name: 'Mahmud',
      last_name: 'Weippert',
      email: 'mweippert3@opensource.org',
      gender: 'Agender',
    },
    {
      id: 5,
      first_name: 'Eddy',
      last_name: 'Halleybone',
      email: 'ehalleybone4@netvibes.com',
      gender: 'Bigender',
    },
  ];

  const namesList = persons.map((person, index) => {
    return <Person key={index} person={person} />;
  });
  return <div>{namesList}</div>;
};

export default NameList;
