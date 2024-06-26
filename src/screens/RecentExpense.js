import { View } from "react-native";
import Layout from "../layout/Layout";
import TrackingLayout from "../layout/TrackingLayout/TrackingLayout";
import { useSelector } from 'react-redux';
function RecentExpense() {
    const expenses = useSelector(state => state.expensesReducer.expenses); 

    const currentDate = new Date();
    
    const sevenDaysAgo = new Date(currentDate);
    
    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    let expensesWithinSevenDays = []

    expenses.forEach((expense, index) => {
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