import React, { useContext, useState } from 'react';
import { store } from './App';

function Display() {
    const [data, setData] = useContext(store);
    const [name,setName] = useState('');

   function submitHandler(e){
    e.preventDefault();
    setData([...data,{brandname:name}])
   }

    return (
        <div>
            {
               data.map((item) => (
                <>
                <h3>{item.brandname}</h3>
                </>
               ))
            }
            <form onSubmit={submitHandler}>
                <input type='text' 
                placeholder='Enter your brand'
                onChange={(e)=> setName(e.target.value)}
                />
                <input type='submit' value='Add' />
            </form>
        </div>
    )
}

export default Display