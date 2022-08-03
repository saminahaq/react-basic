import React from 'react';
import Card from '../UI/Card';
import ExpenseItems from '../Expenses/ExpenseItems';
import './Expenses.css'

//here we can disple the expense.item as we have name "item" over the app.js file
const Expenses = (props) => {
    return (
        <Card className="expenses">
            {
                props.item.map(
                    expense => (
                        <ExpenseItems 
                            key={ expense.id }
                            date={ expense.date } 
                            title={ expense.title } 
                            amount={ expense.amount } />
                    )
                )
            }

        </Card>
    );
}

export default Expenses;