import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';

function App() {

  const [amount1,setAmount1] = useState(1);
  const [amount2,setAmount2] = useState(75);
  const [type1,setType1] = useState("USD");
  const [type2,setType2] = useState("INR");

  const [a1,setA1] = useState(1);
  const [t1,setT1] = useState("USD");
  const [t2,setT2] = useState("INR");

  useEffect(() => {
    
  },[]);

  const convert = () => {

    setA1(amount1);
    setT1(type1);
    setT2(type2);

    if(type1=="USD" && type2=="USD"){
      setAmount2(amount1*1);
    }
    if(type1=="USD" && type2=="INR"){
      setAmount2(amount1*75);
    }
    if(type1=="INR" && type2=="USD"){
      setAmount2(amount1/75);
    }
    if(type1=="USD" && type2=="AUD"){
      setAmount2(amount1*1.39);
    }
    if(type1=="AUD" && type2=="USD"){
      setAmount2(amount1/1.39);
    }
    if(type1=="USD" && type2=="EUR"){
      setAmount2(amount1*0.88);
    }
    if(type1=="EUR" && type2=="USD"){
      setAmount2(amount1/0.88);
    }
    if(type1=="USD" && type2=="GBP"){
      setAmount2(amount1*0.73);
    }
    if(type1=="GBP" && type2=="USD"){
      setAmount2(amount1/0.73);
    }
    if(type1=="INR" && type2=="INR"){
      setAmount2(amount1*1);
    }
    if(type1=="INR" && type2=="AUD"){
      setAmount2(amount1*0.018);
    }
    if(type1=="AUD" && type2=="INR"){
      setAmount2(amount1/0.018);
    }
    if(type1=="INR" && type2=="EUR"){
      setAmount2(amount1*0.011);
    }
    if(type1=="EUR" && type2=="INR"){
      setAmount2(amount1/0.011);
    }
    if(type1=="INR" && type2=="GBP"){
      setAmount2(amount1*0.0099);
    }
    if(type1=="GBP" && type2=="INR"){
      setAmount2(amount1/0.0099);
    }
    if(type1=="AUD" && type2=="EUR"){
      setAmount2(amount1*0.633);
    }
    if(type1=="EUR" && type2=="AUD"){
      setAmount2(amount1/0.633);
    }
    if(type1=="AUD" && type2=="GBP"){
      setAmount2(amount1*0.529);
    }
    if(type1=="GBP" && type2=="AUD"){
      setAmount2(amount1/0.529);
    }
    if(type1=="EUR" && type2=="GBP"){
      setAmount2(amount1*0.8358);
    }
    if(type1=="GBP" && type2=="EUR"){
      setAmount2(amount1/0.8358);
    }
  }

  const changeAmount = (e) => {
    setAmount1(e.target.value);
  }

  const changeType1 = (e) => {
    setType1(e.target.value);
  }

  const changeType2 = (e) => {
    setType2(e.target.value);
  }

  return (
    <div className="App">
      <Header></Header>
      <div id="container">
        <div id="d1">
          <label>Amount: </label>
          <input type="number" onChange={changeAmount} value={amount1} placeholder="Please Enter Amount"/>
          <select onChange={changeType1} value={type1}>
            <option value="INR">Indian Rupee INR</option>
            <option value="USD">US Dollar USD</option>
            <option value="AUD">Australian Dollar AUD</option>
            <option value="EUR">Euro EUR</option>
            <option value="GBP">Pound Sterling GBP</option>
          </select>
          <select onChange={changeType2} value={type2}>
            <option value="INR">Indian Rupee INR</option>
            <option value="USD">US Dollar USD</option>
            <option value="AUD">Australian Dollar AUD</option>
            <option value="EUR">Euro EUR</option>
            <option value="GBP">Pound Sterling GBP</option>
          </select>
        </div>
        <div className="result">
          <button onClick={convert}>Convert</button>
          <h2>Converted Amount:</h2>
          <p>{a1} {t1} = {amount2.toFixed(2)} {t2}</p>
        </div>
      </div>  
      <Footer></Footer>  
    </div>
  );
}

export default App;
