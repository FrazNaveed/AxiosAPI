import {useState, useEffect} from 'react';
import axios from 'axios';


function App() {


  const  [num, setNum] = useState();
  const  [name, setName] = useState();
  const  [moves, setMoves] = useState();


  useEffect(()=>{
  async function getData(){
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    console.log(res.data.name);
     setName(res.data.name);
     setMoves(res.data.moves.length);
  }
  getData();
  });


  return (
    <>
    <h1> You chose: <span style = {{color:'red'}}>   {num}  </span></h1>
    <h1> Name is: <span style = {{color:'red'}}>     {name}  </span></h1>
    <h1> Moves are <span style = {{color:'red'}}>    {moves} </span></h1>
    <select value = {num} onChange={(event)=>{setNum(event.target.value)}}>


   <option value = '1'> 1 </option>
   <option value = '2'> 2 </option>
   <option value = '3'> 3 </option>
   <option value = '4'> 4 </option>
   <option value = '5'> 5 </option>
   <option value = '6'> 6 </option>
   <option value = '7'> 7 </option>
   
 </select>
    </>
  );
}

export default App;
