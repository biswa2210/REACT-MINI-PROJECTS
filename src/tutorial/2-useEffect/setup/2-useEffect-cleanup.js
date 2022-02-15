import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const checkSize = () => {
    setSize(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  console.log('render');
  return (
    <>
      <h1>WINDOW</h1>
      <h2>width : {size}px</h2>  
      <h2>heigth : {height}px</h2>  
    </>
  );
};

export default UseEffectCleanup;
