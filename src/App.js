import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Text from './Text/Text';
import TodoForm from './TodoForm/TodoForm';
import { API_URL } from './shared/config';
import TodoList from './TodoList/TodoList';

function App() {
  const [data, setData] = useState([]);

  // const getAllTodos = async () => {
  //   const response = await axios.get(API_URL);
  //   console.log(response)
  //   setData(response);
  // };

  // useEffect(() => {
  //   getAllTodos()
  // }, []);
  // console.log(data)

  return (
    <div className="App">
      <Text />
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
