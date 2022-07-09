import React from 'react';
import Likert from 'react-likert-scale';

export default () => {
  const likertOptions2 = {
    question: "What is your opinion of the temperature in this room?",
    responses: [
      { value: 1, text: "Too cold" },
      { value: 2, text: "A little cold" },
      { value: 3, text: "Perfect"},
      { value: 4, text: "A little hot" },
      { value: 5, text: "Too hot" }
    ],
    onChange: val => {
      console.log(val);
    }
  };
 
  return (
    <Likert {...likertOptions2} />
  )
}