import React from 'react'
import cls from './TodoList.module.css';
import Buttons from '../Buttons/Buttons';
import { TodoItem } from '../TodoItem/TodoItem';

const TodoList = () => {
  return (
    <div className={cls.todoList}>
      <Buttons />
      <TodoItem />
    </div>
  )
}

export default TodoList