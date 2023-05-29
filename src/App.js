import "./App.css";
import React, { createContext,useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export const store = createContext();

function App() {
    const [data,setData] = useState(0);

  return (
    <store.Provider value={[data,setData]}>
    <center>
      <ComponentA/>
      <ComponentB/>
      <button onClick={()=> setData(data+1)}>Increment</button>
    </center>
    </store.Provider>
  );
}

export default App;
