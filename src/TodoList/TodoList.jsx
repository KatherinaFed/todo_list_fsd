import React, { useEffect } from 'react';
import cls from './TodoList.module.css';
import Buttons from '../Buttons/Buttons';
import { TodoItem } from '../TodoItem/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodosThunk } from '../redux/todoSlice';
import { uniqueId } from 'lodash';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector((state) => state.todos);
  
  useEffect(() => {
    dispatch(getAllTodosThunk());
  }, [dispatch]);
  console.log(todos)

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // console.log('todos: ', todos)

  return (
    <div className={cls.todoList}>
      <Buttons />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={uniqueId()}
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
