import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { Phonelist } from './Phones';
//function Greeting(){
//  return <h4>This is Biswa and This is my 1st React Component</h4>;
//}
/*
CREATED BY BISWARUP BHATTACHARJEE
EMAIL    : bbiswa471@gmail.com
PHONE NO : 6290272740
*/
/*const Greeting = () => {
  return React.createElement('div',
    {},
  React.createElement('h1',{},"Devil Biswaaa"));
}*/
ReactDOM.render(<Phonelist />, document.getElementById('root'));
