import './App.css';
import{useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const [id,setId]=useState("")
  const [output,setOutput]=useState('');

  const getdata=()=>{
      axios.get('https://the-dune-api.herokuapp.com/quotes').then(res=>{
        console.log(res);
        setId(res.data[0].id);
        setOutput(res.data[0].quote);
      })
  }

return(
  <div className="container">
    <div className="box">
      <div className="id">ID:-  {id}</div>
      <div className="text">QUOTE:-  {output}</div>
    </div>
    <button onClick={(e)=>getdata()}>Get Quote</button>
  </div>
)

}

export default App;
