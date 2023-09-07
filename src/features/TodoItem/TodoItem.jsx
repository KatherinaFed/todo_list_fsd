import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CgClose } from 'react-icons/cg';
import { MdDoneAll, MdOutlineDoneOutline } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { LuSave } from 'react-icons/lu';
import cls from './TodoItem.module.css';
import {
  useCompleteTodoMutation,
  useDeleteTodoMutation,
} from '../../services/todoServiceApi';

const styleDoneTodo = { backgroundColor: '#ffc93c' };
const styleTodoBG = { backgroundColor: '#b1cbbb' };

export const TodoItem = ({ id, title, isCompleted }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [editedTitle, setEditedTitle] = useState(title);

  // delete todo RTK
  const [deleteTodo] = useDeleteTodoMutation();

  const handleCompleteTodo = () => {
    // dispatch(completeTodoThunk({ id }));
  };

  const handleRemoveTodo = () => {
    deleteTodo({ id });
  };

  const handleUpdateTitle = () => {
    setIsEditing(false);
  };

  const handleSaveTitle = () => {
    //   dispatch(updateTodoThunk({ id, title: editedTitle }));
  };

  return (
    <li
      style={isCompleted ? styleDoneTodo : styleTodoBG}
      className={cls.itemArea}
    >
      {isCompleted && (
        <span className={cls.completedTodo} style={{ color: 'green' }}>
          <MdOutlineDoneOutline />
        </span>
      )}

      <textarea
        style={{ border: !isEditing && '1px solid #155263' }}
        disabled={isEditing}
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />

      <div className={cls.itemButtons}>
        {isEditing ? (
          <motion.button
            whileHover={{ scale: 1.2 }}
            className={cls.editBtn}
            onClick={handleUpdateTitle}
          >
            <AiOutlineEdit />
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.2 }}
            className={cls.editBtn}
            onClick={handleSaveTitle}
          >
            <LuSave />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.2 }}
          style={{ color: 'green' }}
          className={cls.doneBtn}
          onClick={handleCompleteTodo}
        >
          {!isCompleted ? <MdDoneAll /> : null}
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
    </li>
  );
};
