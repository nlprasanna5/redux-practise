import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { increment,decrement,reset } from "./features/Count";


function App() {
  const dispatch = useDispatch();
  const countValue = useSelector((state) => state.count);

  return (
    <div className="App">
      <h4>count: {countValue}</h4>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
