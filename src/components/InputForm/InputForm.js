import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Platform, StyleSheet, Pressable} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomText from '../CustomText/CustomText';
import { useDispatch } from 'react-redux';
import { addExpense, editExpense } from '../../redux/slice/expenseSlice';
import { useNavigation } from '@react-navigation/native';
function InputForm({edit = false, id, title, expense = {description: "", amount: "", date: new Date()}}) {
    const dispatch = useDispatch();
    const [expenseName, setExpenseName] = useState(expense.description);
    const [expenseAmount, setExpenseAmount] = useState(expense.amount);
    const [chosenDate, setChosenDate] = useState(expense.date);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const navigation = useNavigation()
    useEffect(() => {
        setChosenDate(new Date());
    }, []);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || chosenDate;
        setShowDatePicker(Platform.OS === 'ios');
        setChosenDate(currentDate);
    };

    const handleAdd = () => {
        
        if(edit) {
            const newExpense = {id: expense.id, description: expenseName, amount: +expenseAmount, date: new Date(chosenDate)}
            if(expenseName.length == 0) {
                newExpense.description = "Untitle"
            }
            console.log(expense)
            console.log(newExpense)
            dispatch(editExpense({id: id, edited: newExpense}))
            navigation.goBack()
        } else {
            const uniq = 'e' + (new Date()).getTime();
            const newExpense = {id: uniq, description: expenseName, amount: +expenseAmount, date: new Date(chosenDate)}
            if(expenseName.length == 0) {
                expense.description = "Untitle"
            }
            dispatch(addExpense(newExpense))
        }
        setExpenseName('');
        setExpenseAmount('');
        setChosenDate(new Date())
        alert("Add success")
    };

    function formatDate(date){
        // Format options for DD/MM/YY
        const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
        
        return date.toLocaleDateString('en-GB', options);
    }
    return ( 

        <View style={styles.form}>
                <CustomText style={styles.heading}>{title}</CustomText>
                <View>
                    <CustomText style={styles.label}>Title:</CustomText>
                </View>
                <TextInput
                  style={styles.input}
                  value={expenseName}
                  onChangeText={text => setExpenseName(text)}
                  placeholder="Enter expense title"
                />
                <CustomText style={styles.label}>Expense Amount:</CustomText>
                <TextInput
                  style={styles.input}
                  value={expenseAmount.toString()}
                  onChangeText={text => setExpenseAmount(text)}
                  placeholder="Enter expense amount"
                  keyboardType="numeric"
                />

                <CustomText style={styles.label}>Date</CustomText>

                <View style={[styles.input, {justifyContent: "space-between", flexDirection: "row", alignItems: "center"}]}>
                  <CustomText>{formatDate(chosenDate)}</CustomText>
                  <Pressable onPress={() => setShowDatePicker(true)}>
                      <FontAwesome name="calendar" size={24} color="#b30021" />
                  </Pressable>
                </View>

                {showDatePicker && (
                  <DateTimePicker
                    value={chosenDate}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                  />
                )}
                <TouchableOpacity style={styles.button} onPress={handleAdd}>
                  <CustomText style={styles.buttonText}>{edit ? "Confirm" : "Add"}</CustomText>
                </TouchableOpacity>
              </View> 
    );
}

export default InputForm;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 20,
      paddingBottom: 50,
      height: "100%",
    },
    form: {
      backgroundColor: "white",
      paddingVertical: 20,
      paddingHorizontal: 30,
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,

      elevation: 16,
    },
    heading: {
      textAlign: "center",

    },
    label: {
      color: "#b30021",
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 20,
      marginBottom: 5,
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#b30021',
      paddingVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 10,
      
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });