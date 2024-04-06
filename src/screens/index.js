import AllExpenses from "./AllExpenses";
import RecentExpense from "./RecentExpense";
import AddExpense from "./AddExpense";
import EditExpense from "./EditExpense";
const screens = [
    {name: "Recent", component: RecentExpense},
    {name: "All", component: AllExpenses},
    {name: "Add", component: AddExpense},
    {name: "Edit", component: EditExpense}
]

export default screens