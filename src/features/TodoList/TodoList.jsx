import React, { useEffect, useState } from 'react';
import cls from './TodoList.module.css';
import Buttons from '../../shared/ui/Buttons/Buttons';
import { TodoItem } from '../TodoItem/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodosThunk } from '../../redux/todoSlice';
import { uniqueId } from 'lodash';

const TodoList = () => {
  const [activeButton, setActiveButton] = useState('all');

  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodosThunk());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={cls.todoList}>
      <Buttons activeButton={activeButton} setActive={setActiveButton} />
      <ul>
        {activeButton === 'all' &&
          todos.map((todo) => (
            <TodoItem
              key={uniqueId()}
              id={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
            />
          ))}
        {activeButton === 'active'
          ? todos.map((todo) => {
              return (
                todo.isCompleted === false && (
                  <TodoItem
                    key={uniqueId()}
                    id={todo.id}
                    title={todo.title}
                    isCompleted={todo.isCompleted}
                  />
                )
              );
            })
          : null}
        {activeButton === 'completed'
          ? todos.map((todo) => {
              console.log(todo);
              return (
                todo.isCompleted === true && (
                  <TodoItem
                    key={uniqueId()}
                    id={todo.id}
                    title={todo.title}
                    isCompleted={todo.isCompleted}
                  />
                )
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default TodoList;
