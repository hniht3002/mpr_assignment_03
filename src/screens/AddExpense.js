import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Platform, StyleSheet, Pressable, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomText from '../components/CustomText/CustomText';
import Layout from "../layout/Layout"
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/slice/expenseSlice';
import InputForm from '../components/InputForm/InputForm';
function AddExpense() {
  const dispatch = useDispatch();
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [chosenDate, setChosenDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    setChosenDate(new Date());
  }, []);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || chosenDate;
    setShowDatePicker(Platform.OS === 'ios');
    setChosenDate(currentDate);
  };

  const handleAdd = () => {
    const uniq = 'e' + (new Date()).getTime();
    const expense = {id: uniq, description: expenseName, amount: +expenseAmount, date: new Date(chosenDate)}
    if(expenseName.length == 0) {
      expense.description = "Untitle"
    }
    
    dispatch(addExpense(expense))
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
    <Layout>
        <ScrollView>
          <View style={styles.container}>
              <InputForm title="Add Expense" />
          </View>
        </ScrollView>    
    </Layout>
  );
};

export default AddExpense;
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