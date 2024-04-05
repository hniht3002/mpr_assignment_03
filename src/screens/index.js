import AllExpenses from "./AllExpenses";
import RecentExpense from "./RecentExpense";
import AddExpense from "./AddExpense";
const screens = [
    {name: "Recent", component: RecentExpense},
    {name: "All", component: AllExpenses},
    {name: "Add", component: AddExpense}
]

export default screens