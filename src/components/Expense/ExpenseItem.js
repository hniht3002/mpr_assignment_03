import { View, StyleSheet, Pressable } from "react-native";
import CustomText from "../CustomText/CustomText";
import { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { deleteExpense } from "../../redux/slice/expenseSlice";
import color from "../../constants/color";

function ExpenseItem({expense, id}) {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const [active, setActive] = useState(false)
    function formatDate(date){
        // Format options for DD/MM/YY
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        
        return date.toLocaleDateString('en-GB', options);
    }
    return (
        <Pressable onPress={ () => {setActive(!active)}}>
            <View style={styles.wrapper}>
                <View>
                    <CustomText style={{fontSize: 12, color: "gray", fontWeight: 500}}>{formatDate(expense.date)}</CustomText>
                    <CustomText style={{fontSize: 16, color: "black", fontWeight: 900}}>{expense.description}</CustomText>
                </View>
                <CustomText style={{color: "#b30021"}}>${expense.amount}</CustomText>
            </View>
            {active && 
            <View style={styles.actionBtnWrapper}>
                <Pressable style={styles.actionBtn} onPress={() => navigation.navigate("Edit", {expense: expense, id: id})}>
                    <FontAwesome name="edit" size={20} color="black" />
                </Pressable>

                <Pressable style={styles.actionBtn} onPress={() => {dispatch(deleteExpense(id)); setActive(false)}}> 
                    <FontAwesome name="trash-o" size={20} color="#b30021" />
                </Pressable>
            </View>}
        </Pressable>
        
    );
}

export default ExpenseItem;
const styles = StyleSheet.create({
    wrapper: {

        backgroundColor: "#fffff7",
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderLeftWidth: 10,
        borderLeftColor: "#b30021"
    },
    actionBtnWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
        backgroundColor: "white"
    },
    actionBtn: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
    }
})