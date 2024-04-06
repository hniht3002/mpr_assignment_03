import { ScrollView, StyleSheet, View } from "react-native";
import CustomText from "../../components/CustomText/CustomText";
import DUMMY_EXPENSES from "../../store/data";
import ExpenseItem from "../../components/Expense/ExpenseItem";
import { LinearGradient } from 'expo-linear-gradient';
import ExpenseList from "../../components/Expense/ExpenseList";
function TrackingLayout({children, title, expenses}) {
    let total = expenses.reduce((total, expense) => total + expense.amount, 0);
    total = Number(total).toFixed(2)
    total = Number(total)

    return ( 
        <View style={styles.wrapper}>
            <View style={styles.screen}>
                <CustomText align="center" style={{color: "white", fontSize: 36, justifyContent: "center", alignItems: "center", flexDirection: "row"}}>${total}
                </CustomText>
            </View>

            <CustomText align="left" style={{color: "#2e2c27", fontWeight: "bold", paddingVertical: 20}}>{title}</CustomText>
            
            <ScrollView contentContainerStyle = {{width: "100%", gap: 20, paddingBottom: 20}} style={{width: "80%"}}>
                <ExpenseList expenses={expenses}/>
            </ScrollView>
        </View>
     );
}

export default TrackingLayout;
const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        flex: 1
    },
    screen: {
        backgroundColor: "#b30021",
        borderRadius: 15,
        width: "80%",
        height: 100,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    }
})