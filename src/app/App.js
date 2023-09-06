import './App.css';
import Text from '../shared/ui/Text/Text';
import TodoForm from '../features/TodoForm/TodoForm';
import TodoList from '../features/TodoList/TodoList';

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
