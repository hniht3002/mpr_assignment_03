import ExpenseItem from "./ExpenseItem";
function ExpenseList({expenses}) {
    return ( 
        <>
            {expenses.map((expense, index) => {
                return <ExpenseItem expense={expense} key={index} id={expense.id}/>
            })}
        </>
    );
}

export default ExpenseList;{}