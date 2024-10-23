import React, { useState } from 'react';

const NewGroup = props => {
  const [enteredName, setEnteredName] = useState('');

  const addGroupHandler = event => {
    event.preventDefault();

    const newGroup = {
      id: Math.random().toString(),
      name: enteredName
    };

    setEnteredName('');

    props.onAddGroup(newGroup);
  };

  const nameChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGroupHandler}>
      <input type="text" value={enteredName} onChange={nameChangeHandler} />
      <button type="submit">Add Group</button>
    </form>
  );
};

export default NewGroup;