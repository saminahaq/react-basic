import React,{useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = props => {

    const [enterTitle, setEnterTitle] = useState(props.title);
    const [enterAmount, setEnterAmount] = useState(props.amount);
    const [enterDate, setEnterDate] = useState(props.date);

    const  titleChangeHandler =(event) =>{
        
        setEnterTitle(event.target.value);
            //console.log(event.target.value);
    } 
    const  AmountChangeHandler =(event) =>{
        setEnterAmount(event.target.value);
            //console.log(event.target.value);
    } 
    const  dateChangeHandler =(event) =>{
        setEnterDate(event.target.value);
            //console.log(event.target.value);
    } 

    const submitHandler =(event) => {
        event.preventDefault();

        const expenseData ={
            title:enterTitle,
            amount:enterAmount,
            date:new Date(enterDate)
        }
        console.log(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');

        props.onSaveExpenseData(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enterTitle} onChange={titleChangeHandler}/>
            </div>
            
            <div className='new-expense__control'>
                <label>Amount</label>
               <input type="text" value={enterAmount} onChange={AmountChangeHandler} min="0.01" step= "0.01"/>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" value={enterDate}  onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__control'>
        <button type='submit'> Add Expense</button>
    </div>
    </form>
    );
};

export default ExpenseForm;