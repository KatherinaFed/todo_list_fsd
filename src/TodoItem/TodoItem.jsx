import React from 'react';
import { motion } from 'framer-motion';
import { CgClose } from 'react-icons/cg';
import { MdDoneAll } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import cls from './TodoItem.module.css';

export const TodoItem = () => {
  return (
    <ul>
      <motion.li className={cls.itemArea} whileHover={{ scale: 0.9 }}>
        <textarea disabled>tuyuyuuy</textarea>
        <div className={cls.itemButtons}>
          <motion.button whileHover={{ scale: 1.2 }} className={cls.editBtn}>
            <AiOutlineEdit />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            style={{ color: 'green' }}
            className={cls.doneBtn}
          >
            <MdDoneAll />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            style={{ color: 'red' }}
            className={cls.closeBtn}
          >
            <CgClose />
          </motion.button>
        </div>
      </motion.li>
    </ul>
  );
};
