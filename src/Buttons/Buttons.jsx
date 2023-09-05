import React from 'react';
import { motion } from 'framer-motion';
import cls from './Buttons.module.css';

const sylesBtnActive = { backgroundColor: '#ff6f3c', marginRight: '1rem' };
const stylesBtnDefault = { backgroundColor: '#ff9a3c', marginRight: '1rem' };

const Buttons = ({ activeButton, setActive }) => {
  return (
    <div className={cls.filterButtons}>
      <motion.button
        style={activeButton === 'all' ? sylesBtnActive : stylesBtnDefault}
        whileHover={{ scale: 1.1 }}
        onClick={() => setActive('all')}
      >
        All
      </motion.button>
      <motion.button
        style={activeButton === 'active' ? sylesBtnActive : stylesBtnDefault}
        whileHover={{ scale: 1.1 }}
        onClick={() => setActive('active')}
      >
        Active
      </motion.button>
      <motion.button
        style={activeButton === 'completed' ? sylesBtnActive : stylesBtnDefault}
        whileHover={{ scale: 1.1 }}
        onClick={() => setActive('completed')}
      >
        Completed
      </motion.button>
    </div>
  );
};

export default Buttons;
