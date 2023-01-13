import './App.css';
import {useEffect, useState} from 'react'
import Hey from './Components/Hey';


function App() {

  const [jokes,setJokes]= useState('hey')

  useEffect(()=>{
      const result=async ()=>{
        await fetch(" https://api.chucknorris.io/jokes/random").then(res=> res.json()).then(data=>setJokes(data.value))
      }
      result()
  },[])

  function Btn(data){
    return setJokes(data.value)
  }


  



  // https://api.chucknorris.io/jokes/random

  return (
    <div className="App bg-black h-screen flex flex-col items-center justify-center px-4">
     <a className='px-4 py-6 bg-gradient-to-t from-purple-400 to-yellow-400 text-4xl font-semibold space-y-4 rounded-xl'>
      {jokes}</a>
      <button onClick={Btn}className='bg-white'>Click</button>

{/* {Btn} */}
    </div>
  );
}

export default App;
