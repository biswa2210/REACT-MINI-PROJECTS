import React, { useState } from 'react';


const UseStateBasics = () => {
  const [text, setText] = useState('devil biswa');
  const handleClick = () => {
    if (text === 'devil biswa') {
      setText('biswarup bhattacharjee');
    } else {
      setText('devil biswa');
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
     <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
      </React.Fragment>
  );
};

export default UseStateBasics;
