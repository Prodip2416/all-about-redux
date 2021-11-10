import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './actions/actions';
import './App.css';


function App() {
  const counter = useSelector(state=> state.counter);
  const isLogged = useSelector(state=>state.logged);
  const disPatch = useDispatch();
  return (
    <div className="App">
      <div>
        <h2>Counter - {counter}</h2>
        <button onClick={()=> disPatch(increment())}>+</button>
        <button onClick={()=> disPatch(decrement())}>-</button>
        {
          isLogged ? <h2>valuable information is here ...</h2> : ''
        }
      </div>
    </div>
  );
}

export default App;
