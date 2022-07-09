import React from 'react';
import Likert from 'react-likert-scale';

export default () => {
  const likertOptions3 = {
    question: "What is your opinion of the humidity in this room?",
    responses: [
      { value: 1, text: "Too dry" },
      { value: 2, text: "A little dry" },
      { value: 3, text: "Perfect"},
      { value: 4, text: "A little humid" },
      { value: 5, text: "Too humid" }
    ],
    onChange: val => {
      console.log(val);
    }
  };
  return (
    <Likert {...likertOptions3} />
  )
}