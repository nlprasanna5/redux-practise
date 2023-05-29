import React,{useContext} from 'react';
import { store } from './App';

function ComponentA() {
    const [data,setData] = useContext(store);
  return (
    <div>ComponentA {data}</div>
  )
}

export default ComponentA