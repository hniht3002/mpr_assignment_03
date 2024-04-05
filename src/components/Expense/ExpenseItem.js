import { View, StyleSheet } from "react-native";
import CustomText from "../CustomText/CustomText";

function ExpenseItem({expense}) {
    return (
        <View style={styles.wrapper}>
            <CustomText style={{fontSize: 14}}>{expense.description}</CustomText>
            <CustomText>${expense.amount}</CustomText>
        </View>
        
    );
}

export default ExpenseItem;
const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        
        backgroundColor: "#ffffff",
    }
})