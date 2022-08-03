import React, {useState} from 'react';
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItems = props =>{
   //by adding Card componenet and inside the Expense Componenet will removed the expense componenet,
   //so  we need to pass the props.childern from card 

   const [newTitle, setNewTitle] =useState("hi");
   const [title, setTitle] = useState(props.title);

   const clickHandler =() =>{
            setTitle(newTitle)
   }
   const onChangeHandler =(event) =>{

            setNewTitle(event.target.value);
   }
    return (
         <Card className='expense-item'>
            {/* <ExpenseDate  date={props.date}></ExpenseDate> */}
            <div className='expense-item__description'>
                <h2>{ title }</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <input type="text" value = {newTitle}  onChange = {onChangeHandler} />
                <button onClick={clickHandler}>Change title</button>
            </div>
        </Card>
  );
}

export default ExpenseItems;