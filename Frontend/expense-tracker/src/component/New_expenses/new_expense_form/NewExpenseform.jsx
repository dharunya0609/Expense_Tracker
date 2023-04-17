import React, { useState } from "react";
import './NewExpenseform.css'


    


const NewExpenseForm=(props)=>{

    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState('');
    const {save}=props;


const titlechange=(event)=>setTitle(event.target.value)

const amtchange=(event)=>setAmount(event.target.value)

const datechange=(event)=>setDate(event.target.value)

const SubmitHandler=(event)=>{
    event.preventDefault();
    const newexp={title,amount,date:new Date(date)};
    save(newexp);
    console.log(title,amount,date);
    }

    return(<>
   
    <form onSubmit={SubmitHandler}>
        <div className="new-expense__controls ">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title"  placeholder="Title" onChange={titlechange}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" id="amount"  min="0" max="1000"  placeholder="Amount" onChange={amtchange}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date"  onChange={datechange}/>
            </div>
        </div>
        <div>
            <div className="new-expense__actions">
                <button type="reset">Cancel</button>
                <button type="submit" >Add Expenses</button>

           </div>

        </div>
    </form>
    
    
    
    </>)
}
export  default NewExpenseForm;