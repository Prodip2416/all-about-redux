import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import CompA from './CompA';
import { rootReducer } from './reducers/rootReducer';

function App() {
  const myStore = createStore(rootReducer);
  return (
    <div className="App">
      <Provider store={myStore}>
        <CompA />
      </Provider>
    </div>
  );
}

export default App;
