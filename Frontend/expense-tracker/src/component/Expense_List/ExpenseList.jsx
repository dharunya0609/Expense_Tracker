import React from "react";
import './ExpenseList.css'
import ExpenseItem from "../Expenses/Expense_item/Expenseitem";

const ExpenseList=(props)=>{
    const {expenses=[]}=props;
    if(expenses.length==0)
    {
        return(<>
        <h2>No Expenses Found</h2>
        </>)
    }
    return(
        <ul className="expenses-list ">
            {expenses.map((i)=>{
                return(<ExpenseItem key={i.id||i._id} title={i.title} amount={i.amount} date={i.date}/>)
            })}
        </ul>)
}

export default ExpenseList;