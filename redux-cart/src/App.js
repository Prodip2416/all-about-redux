import './App.css';
import Navbar from './Navbar/Navbar';
import Items from './Items/Items';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { cartReducer } from './cartReducer';

function App() {
  const store = createStore(cartReducer);
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Items />
      </Provider>
    </div>
  );
}

export default App;
