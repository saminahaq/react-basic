//gateway componet. 
import React, {useState, useEffect} from "react";
import Expenses from "./SubComponents/Expenses/Expenses";
import NewExpense from "./SubComponents/NewExpense/NewExpense";


// here we create an array of objects, but this is also hard code not recommended 
let DUMMY_EXPENSE = [];
const App = () =>{

const [expenses, setExpense] = useState(DUMMY_EXPENSE);

function  fetchData(){
fetch('https://jsonplaceholder.typicode.com/todos').then(
    response => {
        return response.json();
    }
).then(
    data => {
        //console.log(data);
        setExpense(data);
    }
);
}

useEffect(()=>{
    fetchData();
},[]);



const addExpenseHandler = (expense) =>{
    const updateExpense = [expense, ...expenses]
    setExpense(updateExpense);
    
}

 return(
       
         //now we need to pass data in componenets as the name of the "item" and passing above array {expense}
        <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses item = {expenses}/>
        </div>
 );
}
export default App