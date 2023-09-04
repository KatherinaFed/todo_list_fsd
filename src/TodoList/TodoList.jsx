import React, { useEffect } from 'react';
import cls from './TodoList.module.css';
import Buttons from '../Buttons/Buttons';
import { TodoItem } from '../TodoItem/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodosThunk } from '../redux/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  
  useEffect(() => {
    dispatch(getAllTodosThunk());
  }, [dispatch]);

  if (!todos) {
    return <h1>Loading...</h1>;
  }
  
  console.log('TodoList: ', todos)
  return (
    <div className={cls.todoList}>
      <Buttons />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
