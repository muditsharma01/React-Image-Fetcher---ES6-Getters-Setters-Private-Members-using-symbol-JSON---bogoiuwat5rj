import React, { useState, useEffect } from 'react';

import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
    const [idNumber, setIdNumber] = useState();
    const[isloading, setIsLoading] = useState(false);
    const[data, setData] = useState();
   const handleChange = (e) => {
    setIdNumber(e.target.value);
   }

   const imageFetcher = async(idNumber) => {
    setIsLoading(true);
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${idNumber}`);
    const data = await res.json();
    setData(data);
    setIsLoading(false);
    
   }

   useEffect(() =>{
    imageFetcher(idNumber);
   },[idNumber]);
  
    return(
    <div>
        <label htmlFor='input'>Idnumber</label>
        <input type='number' value={idNumber} onChange={handleChange}></input>
        {isloading && <Loader />}
        {data && <PhotoFrame title={data.title} url={data.url} />}
    </div>
  );
}


export default App;
