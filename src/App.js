import './App.css';
import Text from './Text/Text';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

function App() {
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
