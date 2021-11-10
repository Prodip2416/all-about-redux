import './App.css';
import { createStore } from 'redux';
import { gameReducer } from './gameReducer';
import { Provider } from 'react-redux';
import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';

function App() {
  const myStore = createStore(gameReducer);

  return (
    <div className="App">
      <h1>Redux - Payload</h1>
      <Provider store={myStore}>
        <CompA />
        <CompB />
        <CompC/>
      </Provider>
    </div>
  );
}

export default App;
