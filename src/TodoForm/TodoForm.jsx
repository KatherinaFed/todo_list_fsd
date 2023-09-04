import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GrAdd } from 'react-icons/gr';
import cls from './TodoForm.module.css';
import { useDispatch } from 'react-redux';

const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();


  return (
    <form action="submit" onSubmit={''}>
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
