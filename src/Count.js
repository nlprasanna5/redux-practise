import React, { useContext } from 'react';
import { store } from './App';


function Count() {
    const [data, setData] = useContext(store);
    return (
        <div>
            <h3>Count : {data.length}</h3>
        </div>
    )
}

export default Count