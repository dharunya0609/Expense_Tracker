import React from "react";

import './NewExpense.css'

import NewExpenseForm from "./new_expense_form/NewExpenseform";

import {nanoid} from "nanoid";


const NewExpense=(props)=>{

    const {submitAction}=props;

    const onAddNewExpense=(expense)=>{
        const modified_expense={
            ...expense,
            id:nanoid(),
        }
        submitAction(modified_expense);

    }
    return(<>
    <div className="new-expense">
    <NewExpenseForm save={onAddNewExpense}/>

    </div>
   
   
    
    </>)
}

export default NewExpense;