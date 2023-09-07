import React, { useState } from 'react';
import cls from './TodoList.module.css';
import Buttons from '../../shared/ui/Buttons/Buttons';
import { TodoItem } from '../TodoItem/TodoItem';
import { uniqueId } from 'lodash';
import { useGetAllTodosQuery } from '../../services/todoServiceApi';

const TodoList = () => {
  const [activeButton, setActiveButton] = useState('all');

  // use RTK
  const { data, isLoading, isError, error } = useGetAllTodosQuery();
  
  console.log(data)

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  return (
    <div className={cls.todoList}>
      <Buttons activeButton={activeButton} setActive={setActiveButton} />
      <ul>
        {activeButton === 'all' &&
          data.map((todo) => (
            <TodoItem
              key={uniqueId()}
              id={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
            />
          ))}
        {activeButton === 'active'
          ? data.map((todo) => {
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
          ? data.map((todo) => {
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
