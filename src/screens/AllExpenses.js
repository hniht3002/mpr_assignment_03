import { View } from "react-native";
import Layout from "../layout/Layout";
import TrackingLayout from "../layout/TrackingLayout/TrackingLayout";
import { useSelector } from 'react-redux';

function AllExpenses() {
    const expenses = useSelector(state => state.expensesReducer.expenses);

    return ( 
        <Layout>
            <View style={{flex: 1, backgroundColor: "transparent"}}>
                <TrackingLayout title = "All Expense" expenses = {expenses}></TrackingLayout>
            </View>
        </Layout> 
    );
}

export default AllExpenses;