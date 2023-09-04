import React from 'react';
import cls from './Text.module.css';
import { motion } from 'framer-motion';

const Text = () => {
  return (
    <motion.h1 whileHover={{ scale: 1.1 }} className={cls.todoHeader}>
      Todo App
    </motion.h1>
  );
};

export default Text;
