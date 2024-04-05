import { View } from "react-native";
import Layout from "../layout/Layout";
import TrackingLayout from "../layout/TrackingLayout/TrackingLayout";
import DUMMY_EXPENSES from "../store/data";
function RecentExpense() {
    // Get the current date
    const currentDate = new Date();
    // Calculate the date 7 days ago
    const sevenDaysAgo = new Date(currentDate);
    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    let expensesWithinSevenDays = []

    DUMMY_EXPENSES.forEach((expense, index) => {
        if(expense.date >= sevenDaysAgo && expense.date <= currentDate){
            expensesWithinSevenDays.push(expense)
        }
    })

    return ( 
        <Layout>
            <View style={{flex: 1, backgroundColor: "transparent"}}>
                <TrackingLayout title = "Recent Expense" expenses = {expensesWithinSevenDays}></TrackingLayout>
            </View>
        </Layout>
     );
}

export default RecentExpense;