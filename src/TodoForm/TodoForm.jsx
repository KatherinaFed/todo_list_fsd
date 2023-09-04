import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GrAdd } from 'react-icons/gr';
import cls from './TodoForm.module.css';
import { useDispatch } from 'react-redux';
import { addTodo, addTodoThunk } from '../entities/task/model';

const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo) {
      dispatch(addTodoThunk(todo));
    }
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        className={cls.todoInput}
        type="text"
        placeholder="Add a new task ;)"
      />
      <motion.button className={cls.addTodoBtn} whileHover={{ scale: 1.1 }}>
        <GrAdd />
      </motion.button>
    </form>
  );
};

export default TodoForm;
