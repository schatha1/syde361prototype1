import React from 'react';
import Likert from 'react-likert-scale';

export default () => {
  const likertOptions = {
    question: "What is your opinion of the lighting in this room?",
    responses: [
      { value: 1, text: "Too dark" },
      { value: 2, text: "A little dark" },
      { value: 3, text: "Perfect"},
      { value: 4, text: "A little bright" },
      { value: 5, text: "Too bright" }
    ],
    onChange: val => {
      console.log(val);
    }
  };
  return (
    <Likert {...likertOptions} />
  )
}