import React from 'react';
import { useEffect, useState } from 'react';
import './App.css'

import Expenses from './component/Expenses/expenses';
import NewExpense from './component/New_expenses/NewExpense';
import { addExpense, getAllExpenses } from './api';

// // const DUMMY_DATA = [
// //   {
// //     id: 'e1',
// //     title: 'Groceries',
// //     amount: 94.12,
// //     date: new Date(2021, 7, 14),
// //   },
// //   { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
// //   {
// //     id: 'e3',
// //     title: 'Car Repair',
// //     amount: 294.67,
// //     date: new Date(2021, 2, 28),
// //   },
// //   {
// //     id: 'e4',
// //     title: 'New work desk',
// //     amount: 450,
// //     date: new Date(2021, 5, 12),
// //   },
// // ];


// function App() 
// {

//    const [expenses,setExpenses]=useState([]);
//   //  useEffect(()=>{
//   //   getAllExpenses(setExpenses);
//   //  },[])

//   const onAddNewExpenseItem=(expense)=>
//   {
//     console.log('App.js',expense);
//     addExpense(expense,()=>{
//       setExpenses((prv_exp)=>{
//                 return [...prv_exp,expense];
//                              })
//   })

//   return (


//     <div className="App">
//        hii




//       </div>

//   )
//   {/* 
//         <NewExpense submitAction={onAddNewExpenseItem}/>

//         <Expenses expenses={expenses} /> */}
// }

// }


//   {/* <ExpenseItem title={DUMMY_DATA[0].title} amount={DUMMY_DATA[0].amount} date={DUMMY_DATA[0].date} />
//         <ExpenseItem title={DUMMY_DATA[1].title} amount={DUMMY_DATA[1].amount} date={DUMMY_DATA[1].date}  />
//         <ExpenseItem title={DUMMY_DATA[2].title} amount={DUMMY_DATA[2].amount} date={DUMMY_DATA[2].date}  />
//         <ExpenseItem title={DUMMY_DATA[3].title} amount={DUMMY_DATA[3].amount} date={DUMMY_DATA[3].date}  /> */}

// export default App



function App() {

  const [expenses, setExpenses] = useState([]);
   useEffect(()=>{
    getAllExpenses(setExpenses);
   },[])

  const onAddNewExpenseItem = (expense) => {
    addExpense(expense, () => {
      setExpenses((prv_exp) => {
        return [ expense,...prv_exp];
      })
    })
  }
  return (<div className='App'>
    {/* <h3 style={{textAlign:'center',color:'grey'}}>MY EXPENSES LIST</h3> */}
     <NewExpense submitAction={onAddNewExpenseItem}/>

        <Expenses expenses={expenses} /> 
  </div> )
}

export default App;