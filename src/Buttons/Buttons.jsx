import React from 'react';
import { motion } from 'framer-motion';
import cls from './Buttons.module.css';

const Buttons = () => {
  return (
    <div className={cls.filterButtons}>
      <motion.button
        className={cls.completedButton}
        whileHover={{ scale: 1.1 }}
      >
        All
      </motion.button>
      <motion.button className={cls.activeButton} whileHover={{ scale: 1.1 }}>
        Active
      </motion.button>
      <motion.button whileHover={{ scale: 1.1 }}>Completed</motion.button>
    </div>
  );
};

export default Buttons;
