import { View } from "react-native";
import CustomText from "../components/CustomText/CustomText";
import Layout from "../layout/Layout";
import DUMMY_EXPENSES from "../store/data";
import TrackingLayout from "../layout/TrackingLayout/TrackingLayout";;
function AllExpenses() {
    return ( 
        <Layout>
            <View style={{flex: 1, backgroundColor: "transparent"}}>
                <TrackingLayout title = "All Expense" expenses = {DUMMY_EXPENSES}></TrackingLayout>
            </View>
        </Layout> 
    );
}

export default AllExpenses;