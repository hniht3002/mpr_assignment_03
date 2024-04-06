import { ScrollView, StyleSheet, View } from "react-native";
import CustomText from "../../components/CustomText/CustomText";
import DUMMY_EXPENSES from "../../store/data";
import ExpenseItem from "../../components/Expense/ExpenseItem";
import { LinearGradient } from 'expo-linear-gradient';
function TrackingLayout({children, title, expenses}) {
    let total = expenses.reduce((total, expense) => total + expense.amount, 0);
    total = Number(total).toFixed(2)
    total = Number(total)
    console.log(expenses)

    return ( 
        <View style={styles.wrapper}>
            <View style={styles.screen}>
                <CustomText align="center" style={{color: "#2e2c27", fontWeight: "bold"}}>{title}</CustomText>
                <CustomText align="center" style={{color: "black"}}>{total}</CustomText>
            </View>
            <ScrollView contentContainerStyle = {{width: "100%", gap: 20}} style={{width: "80%"}}>
            {expenses.map((expense, index) => {
                return <ExpenseItem expense={expense} key={index} id={expense.id}/>
            })}
            </ScrollView>
        </View>
     );
}

export default TrackingLayout;
const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 30,
        flex: 1
    },
    screen: {
        borderWidth:1,
        borderRadius: 15,
        width: "80%",
        height: 100,
        padding: 15,
        marginBottom: 30
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    }
})