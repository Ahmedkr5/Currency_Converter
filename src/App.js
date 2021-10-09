import React, {useEffect,useState} from 'react';
import CurrencyRow from './CurrencyRow';
import './App.css';



const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=932bdb1f94c32c4b671db4bb2c80013d'

function App() {
const [currencyOptions ,setCurrencyOptions] = useState([])
const [fromCurrency ,setFromCurrency] = useState()
const [toCurrency ,setToCurrency] = useState()


console.log(currencyOptions)
useEffect(() => {
  fetch(BASE_URL)
  .then(res => res.json())
  .then(data =>{
    const firstcurrency =Object.keys(data.rates)[0]
    console.log(firstcurrency)
    setCurrencyOptions([data.base, ...Object.keys(data.rates)]) //only the keys portion of rates (EUR)
    setFromCurrency(data.base)
    setToCurrency(firstcurrency)
  }
    
    )
  
}, [])


  return (<>
<h1>Convert</h1>
<CurrencyRow currencyOptions={currencyOptions}   selectedCurrency={fromCurrency}></CurrencyRow>
<div className="equal">=</div>
<CurrencyRow currencyOptions={currencyOptions}  selectedCurrency={toCurrency}></CurrencyRow>

</>
  );
}

export default App;
