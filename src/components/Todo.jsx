import React from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'


const Todo = ({todo, removeTask }) => {

    const [changeInput, setChangeInput] = useState(false)

    const handleChecboxClick = () => {
        setChangeInput(!changeInput)
    }

  return (
    <StyledTodos key={todo.id} className="item.todo">
        <h3 style={{textDecoration: changeInput ? 'line-through' : 'none'}}>{todo.task}</h3>
        <StyledCheckbox type="checkbox" checked={changeInput} onClick={handleChecboxClick}></StyledCheckbox>
        <StyledButtonDelete onClick={() => removeTask(todo.id)}>delete</StyledButtonDelete>
    </StyledTodos>
  )
}
const StyledTodos = styled('div')`
    width: 500px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    background-color: lightblue;
    align-items: center;
    border: 1px solid black;
    margin-top: 25px;
    padding: 0 5% 0 5%;
    margin-left: 115px;
`

const StyledButtonDelete = styled('button')`
      width: 110px;
  height: 40px;
  background-color: rgb(213, 140, 66);
  font-size: large;
  color: white;
  border-radius: 25px;
  border: none;
  font-weight: 700;
`

const StyledCheckbox = styled('input')`
    margin-left: 200px;
    width: 20px;
    height: 20px;
`

export default Todo