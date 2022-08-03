//gateway componet. 
import ExpenseItems from "./SubComponents/ExpenseItems";

function App(){

    //this is not recommende as we hard code data so mutiple use of componenet shows same data,
    //so not recommende, instead create an array like app.js and reused the componenet 
    let expenseDate = new Date(2021,3,28);
    let expenseTitle = "School fee";
    let expenseAmount = 1000;





    return (
        // we can use do this component several time, just copy paste 4 times as we are showing 4 times
        //here we are just reusing the ExpenseItem.js compoenet mutiple time [4 time]
        //recomeded
        
        <div>
            <h2>let's get started </h2> 
            <ExpenseItems date = {expenseDate} 
            title = {expenseTitle} 
            amount = {expenseAmount}>
            </ExpenseItems>
            
            <ExpenseItems date = {expenseDate} 
            title = {expenseTitle} 
            amount = {expenseAmount}>
            </ExpenseItems>

            <ExpenseItems date = {expenseDate} 
            title = {expenseTitle} 
            amount = {expenseAmount}>
            </ExpenseItems>

            <ExpenseItems date = {expenseDate} 
            title = {expenseTitle} 
            amount = {expenseAmount}>
            </ExpenseItems>
         

        </div>
    

    );
}

export default App