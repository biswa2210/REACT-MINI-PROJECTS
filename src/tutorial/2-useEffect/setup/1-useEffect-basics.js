import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('call useEffect');
    if (value >=3 ) {
      document.title = `New Messages(${value})`;
    }
  },[value]);
  useEffect(() => {
    console.log("Hello Biswa");
  },[])
  console.log('render component');
  return (
    <>
      <h1>useEffect Tutorials in React</h1>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
