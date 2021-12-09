import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from './Items';
import Navbar from './Navbar';
import AddItem from './AddItem';
import Cart from './Cart';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './reducer/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Footer from './Footer';

function App() {
  const persistConfig = {
    key: 'root',
    storage
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  const persistor = persistStore(store);

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Items} />
              <Route path="/addItem" component={AddItem} />
              <Route path="/cart" component={Cart} />
            </Switch>
            <Footer/>
          </Router>
        </PersistGate>
      </Provider>

    </div>
  );
}

export default App;
