import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GrAdd } from 'react-icons/gr';
import cls from './TodoForm.module.css';

const TodoForm = () => {
  const [todo, setTodo] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (todo) {
    //   dispatch(addTodoThunk(todo));
    //   setTodo('');
    // }
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        className={cls.todoInput}
        type="text"
        placeholder='New task...'
      />
      <motion.button className={cls.addTodoBtn} whileHover={{ scale: 1.1 }}>
        <GrAdd />
      </motion.button>
    </form>
  );
};

export default TodoForm;
