const Expense=require('../model/expense');


exports.getAllExpenses=async(req,res)=>{
    try
    {
            const expenses=await Expense.find();
            return res.status(200).json({
                data:expenses,
                length:expenses.length
            })
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({
            msg:'Internal Server error'
        })
    }
}

exports.createExpenses=async(req,res)=>{
    try
    {
            const newExpense=req.body;
            await Expense.create(newExpense);
            return res.status(200).json({
                msg:'Created'
            })
    }
    catch(err)
    {
        return res.status(500).json({
            msg:'Internal Server error'
        })
    }
}

exports.getExpensesById=async(req,res)=>{
    try
    {
        const expenses=await Expense.findById(req.params.id);
         res.status(200).json({
               data:expenses
            });
    }
    catch(err)
    {
        return res.status(500).json({
            msg:'Internal Server error'
        })
    }
}


exports.deleteExpensesById=async(req,res)=>{
    try
    {
        const expenses=await Expense.findByIdAndDelete(req.params.id);
         res.status(200).json({
               msg:'Deleted'
            });
    }
    catch(err)
    {
        return res.status(500).json({
            msg:'Internal Server error'
        })
    }
}


exports.updateExpensesById=async(req,res)=>{
    try
    {
        const expense=await Expense.findByIdAndUpdate(req.params.id,req.body);
         res.status(200).json({
               msg:'updated'
            });
    }
    catch(error)
    {
        return res.status(500).json({
            msg:'Internal Server error'
        })
    }
}









// exports.filterExpensesByAmount=async(req,res)=>{
//     try
//     {
//         const filteredExpenses = await Expense.find({amount: { $gte: req.params.amount }});
//          res.status(200).json({
//                msg:'Filtered',
//                data: filteredExpenses

//             });
//     }
//     catch(err)
//     {
//         return res.status(500).json({
//             msg:'Internal Server error'
//         })
//     }
// }