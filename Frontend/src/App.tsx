import './components/container.css'
import { TodoList } from './components/todo';
import todoData from './mock.json';


function App() {
  return (

    <div className="container">
      <TodoList todoList={todoData.todoList}/>
    </div>

  );
}

export default App;
