const express=require('express')
const bodyParser=require('body-parser')
const connectDB=require('./config/db')
const cors=require('cors');
const {getAllExpenses,createExpenses,getExpensesById,deleteExpensesById,updateExpensesById,filterExpensesByAmount}=require('./controller/expense')

connectDB();

const app=new express();
app.use(cors({origin:'*'}))
app.use(bodyParser.json());//middleware



app.get('/api/v2/health',(req,res)=>{
    
    res.status(200).send("Server Health check")
});

app.get('/api/v2/expenses',getAllExpenses)

app.post('/api/v2/expenses',createExpenses)

app.get('/api/v2/expenses/:id',getExpensesById)

app.delete('/api/v2/expenses/:id',deleteExpensesById)

app.put('/api/v2/expenses/:id',updateExpensesById)

// app.get('/api/v2/expenses/:amount',filterExpensesByAmount)

app.listen(3000,()=>console.log('server is running..!'));