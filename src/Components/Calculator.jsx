import React, { useState } from 'react'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

function Calculator() {

    const [amount,setAmount] = useState();
    const [percentage,setPercentage] = useState();
    const [discPrice,setDiscPrice] = useState(0);
    const [saved,setSaved] = useState(0);

    function calculatePrice(){
        setDiscPrice(discPrice+(amount-((amount*percentage)/100)))
        console.log(discPrice);
        setSaved(discPrice+((amount*percentage)/100))
    }

    function resetFunc(){

    }

    return (
        <div>
            <div className='container text-center py-5 border rounded shadow my-5 w-75'>
                <h2>Discount Calculator</h2>
                <p>Use the discount calculator to find out the exact amount you will save!</p>
                <div className='container text-center'>
                    <TextField onChange={(e)=>setAmount(e.target.value)} className='w-50 my-3' id="outlined-basic" label="Amount ($)" variant="outlined" /><br />
                    <TextField onChange={(e)=>setPercentage(e.target.value)} className='w-50 mb-3' id="outlined-basic" label="Discount applied (%)" variant="outlined" /><br />
                    {/* <TextField className='w-50' id="outlined-basic" label="" variant="outlined" /> */}
                    <Button onClick={calculatePrice} variant="contained" className='me-3 rounded shadow' color="success">Calculate</Button>
                    <Button onClick={resetFunc} variant="outlined" className='rounded shadow' color="error">Reset</Button>
                </div>
                <div className='container my-5 w-75 d-flex'>
                    <div className="col p-3 me-3 border rounded shadow">
                        <h3>Discount price</h3>
                        <h4 className='text-success'>${discPrice}.00</h4>
                    </div>
                    <div className="col p-3 border rounded shadow">
                        <h3>You saved</h3>
                        <h4 className='text-info'>${saved}.00</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator