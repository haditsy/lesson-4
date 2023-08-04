import React, { useState } from "react";

const TodoForm = ({ addTask }) => {

  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("")
  };

  return (

    <form onSubmit={handleSubmit}>
      <input value={userInput} onChange={handleChange} placeholder='Enter new todo...' className='input' />
      <button className="add">ADD</button>
    </form>
  );
};

export default TodoForm;
