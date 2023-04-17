import{ React} from "react";
import './ExpenseItem.css';

import ExpenseDate  from "../Expense_date/ExpenseDate";
import { useState } from 'react';

 const ExpenseItem=(props)=>{

    const {title,amount,date}=props;

    // const date=new Date().toISOString();
    // const title='Hello world';
    // const amount=100;

    // usestate :  let [ModifiedTitle,setModifiedTitle]=useState(title);

    // const TitleChange=()=>{
    //     setModifiedTitle("updated");
    //     console.log(ModifiedTitle)

    // }

    // const {title="Sample",amount=120,date=new Date()}=props;   Deafult value when not passed in expense item file


   


    return(
        <>
        <li>
        <div className="expense-item">
    
    <ExpenseDate date={date}/>
     <div className="expense-item__description">
 
         <h2>{title}</h2>
         <br></br>
         <div className="expense-item__price">${amount}</div>
 
     </div>
     </div>

        </li>
        
        </>
        
    
    
    )
}
export default ExpenseItem;