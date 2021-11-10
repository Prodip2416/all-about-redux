import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AddTask from './AddTask';
import './App.css';
import Navbar from './Navbar';
import { taskReducer } from './taskReducer';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';

function App() {
  const myStore = createStore(taskReducer);
  return (
    <div className="App">
      <Provider store={myStore}>
        <Navbar />
        <AddTask/>
        <TodoList/>
      </Provider>

    </div>
  );
}

export default App;
