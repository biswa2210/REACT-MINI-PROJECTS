import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainter = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainter.current.value);
    console.log(divContainer.current);
  }
  useEffect(() => {
    console.log(refContainter.current);
    refContainter.current.focus();
  })
  return (
    <>
    <form className='form' onSubmit={handleSubmit}>
        <input type='text' ref={refContainter}></input>
        <button type='submit'>Submit</button>
      </form>  
      <div ref={divContainer}>NINJA</div>
    </>
  );
};

export default UseRefBasics;
