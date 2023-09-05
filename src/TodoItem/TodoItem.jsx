import React from 'react';
import { motion } from 'framer-motion';
import { CgClose } from 'react-icons/cg';
import { MdDoneAll } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import cls from './TodoItem.module.css';
import { uniqueId } from 'lodash';
import { useDispatch } from 'react-redux';
import { completeTodoThunk, removeTodoThunk } from '../redux/todoSlice';

export const TodoItem = ({ id, title, isCompleted }) => {
  const dispatch = useDispatch();

  const handleCompleteTodo = () => {
    dispatch(completeTodoThunk({ id }));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodoThunk({ id }));
  };

  return (
    <motion.li className={cls.itemArea} whileHover={{ scale: 0.9 }}>
      <textarea disabled value={title} />
      <div className={cls.itemButtons}>
        <motion.button whileHover={{ scale: 1.2 }} className={cls.editBtn}>
          <AiOutlineEdit />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          style={{ color: 'green' }}
          className={cls.doneBtn}
          onClick={handleCompleteTodo}
        >
          <MdDoneAll />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          style={{ color: 'red' }}
          className={cls.closeBtn}
          onClick={handleRemoveTodo}
        >
          <CgClose />
        </motion.button>
      </div>
    </motion.li>
  );
};
