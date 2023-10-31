
import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';







function App() {

  // js code
  const[principle,setPrinciple]=useState("")
  const[rate,setRate]=useState("")
  const[year,setYear]=useState("")
  const[interest,setInterest]=useState('0')


  const calculateInterest=(e)=>{
    e.preventDefault()
    //automatic reload prevent
    console.log(principle,rate,year);
    if(!principle||!rate||!year){
      alert('please fill the form completely')
    }
    else{
      setInterest(principle*rate*year/100)

    }

  }
  const restForm=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setInterest(0)
  }
  
  return (
    <>
      <div className="app">
        {/* jsx code */}
        <div className='container'>
          {/* heading */}
          <div className='heading-text'>
            <h3 className='title'>SIMPLE INTEREST CALCULATOR</h3>
            <h6 className='title-para'>CALCULATE YOUR SIMPLE INTEREST EASILY</h6>

          </div>
          {/* card */}
          <div className='amount-card'>
            <div className='card-text'>
              <h3 className='total-amount'>₹{interest}</h3>
              <p className='total-para'>TOTAL SIMPLE INTEREST</p>

            </div>



          </div>

          <form onSubmit={calculateInterest}>
            {/* to hold text field */}
            <div className='text-fields'>
              {/* principle amount */}
              <div className='input'>
                <TextField value={principle||""} onChange={e=>setPrinciple(e.target.value)}
                className='outlined-basic' id="outlined-basic" label="Principle Amount" variant="outlined" />

              </div>
              {/* interest */}
              <div className='input'>
                <TextField value={rate||""}  onChange={e=>setRate(e.target.value)}
                className='outlined-basic' id="outlined-basic" label="Rate Of Interest(p.a)%" variant="outlined" />

              </div>
              {/* year */}
              <div className='input'>
                <TextField value={year||""}  onChange={e=>setYear(e.target.value)}
                className='outlined-basic' id="outlined-basic" label="Time period(yr)" variant="outlined" />

              </div>

            </div>

            {/* button */}




            <div className='btn-group'>
              <Stack direction="row" spacing={2}>
                <Button className='btn' type='submit' style={{backgroundColor:'green'}} variant="contained">Calculate</Button>
                <Button  className='btn' onClick={restForm}  variant="contained" style={{backgroundColor:'blue'}}>Reset</Button>

              </Stack>

            </div>
          </form>


        </div>


      </div>
    </>
  );
}

export default App;
