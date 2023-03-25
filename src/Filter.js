import React from 'react'
import { useSearchParams } from 'react-router-dom';


function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('age'))
    console.log(searchParams.get('city'))
    const age = searchParams.get('age');
    const city = searchParams.get('city');
  return (
    <div>
        <h1>Filter Page</h1>
        <h3>My age is {age}</h3>
        <h3>My city is {city}</h3>
        <input type="text" onChange={(e)=>setSearchParams({name:e.target.value, age:22, city:'Badaun'})}/>
        <button onClick={()=>setSearchParams({age:40})}>set Age</button>
        <button onClick={()=>setSearchParams({city:'Badaun'})}>set City</button>
    </div>
  )
}

export default Filter;
