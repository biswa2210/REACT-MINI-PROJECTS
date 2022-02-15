import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increaseCounter = () => {
    setValue(value + 1);
  };
  const decreaseCounter = () => {
    setValue(value - 1)
  };
  const resetCounter = () => {
    setValue(0);
  };
  const increaseLater = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000)
  };
  return (
    <>
    <section style={{margin: '4rem 0'}}>
      <h2>Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={increaseCounter}>increase</button>
      <button className='btn' onClick={resetCounter}>reset</button>
      <button className='btn' onClick={decreaseCounter}>decrease</button>
      </section>
      <h2>Complex Counter</h2>
      <h1>{value}</h1>
      <section style={{ margin: '4rem 0' }}>
      <button className='btn' onClick={increaseLater}>
          increase later
      </button>
      </section>
    </>
  );
    };

    export default UseStateCounter;
