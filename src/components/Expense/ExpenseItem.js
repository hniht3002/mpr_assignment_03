import { View, StyleSheet, Pressable } from "react-native";
import CustomText from "../CustomText/CustomText";
import { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { deleteExpense } from "../../redux/slice/slice";

function ExpenseItem({expense, id}) {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const [active, setActive] = useState(false)
    return (
        <Pressable onPress={ () => {setActive(!active)}}>
            <View style={styles.wrapper}>
                <CustomText style={{fontSize: 14}}>{expense.description}</CustomText>
                <CustomText>${expense.amount}</CustomText>
            </View>
            {active && 
            <View style={styles.actionBtnWrapper}>
                <Pressable style={styles.actionBtn} onPress={() => navigation.navigate("Edit", {expense: expense, id: id})}>
                    <FontAwesome name="edit" size={24} color="black" />
                </Pressable>

                <Pressable style={styles.actionBtn} onPress={() => {dispatch(deleteExpense(id))}}> 
                    <FontAwesome name="trash-o" size={24} color="black" />
                </Pressable>
            </View>}
        </Pressable>
        
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
    },
    actionBtnWrapper: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    actionBtn: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
    }
})