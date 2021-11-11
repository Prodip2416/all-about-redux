import './App.css';
import { Provider } from 'react-redux';
import AddTodo from './AddTodo';
import ListToDo from './ListToDo';
import { createStore } from 'redux';
import { rootReducer } from './reducer/rootReducer';
// redux-persist
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore,persistReducer} from 'redux-persist';

function App() {

  const persistConfig = {
    key: 'root',
    storage
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  // const myStore = createStore(rootReducer);
  const myStore = createStore(persistedReducer);
  const persistor = persistStore(myStore);

  return (
    <div className="App">
      <Provider store={myStore}>
        <PersistGate persistor={persistor}>
          <AddTodo />
          <ListToDo />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
