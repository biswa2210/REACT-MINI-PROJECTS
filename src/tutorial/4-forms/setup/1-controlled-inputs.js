import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const submitted = (e) => {
    e.preventDefault();
    if (firstName && email) {
      alert('INPUTS ARE\n------------------->\nNAME : ' + firstName + '\nEMAIL : ' + email);
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
        
      
    }
  }
  const removeItem =(id) => {
    let newName = people.filter((person) => person.id !== id);
    setPeople(newName);
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={submitted}>
          <div className='form-control'> 
            <label htmlFor='firstName'>First Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) =>setName(e.target.value)}
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Your Email : </label>
            <input type='text' id='email' name='email'
            value={email}
              onChange={(e) =>setEmail(e.target.value)}></input>
          </div>
          <button type='submit' onClick={submitted} >Add Person</button> 
        </form>
      </article>
      {people.map((person, index) => {
        const { id, firstName, email } = person;
        return (
          <div className='item' key={id}>
            <h4>{firstName}</h4>
            <p>{email}<pre>    </pre><button className='btn' onClick={()=>removeItem(id)}>remove</button></p>
          </div>
        );
      })}
    </>
  );
};

export default ControlledInputs;
