import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Platform, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomText from '../components/CustomText/CustomText';
import Layout from "../layout/Layout"
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/slice/slice';
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
    
    dispatch(addExpense(expense))
    setExpenseName('');
    setExpenseAmount('');
    setChosenDate(new Date())
  };

  function formatDate(date){
    // Format options for DD/MM/YY
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    
    return date.toLocaleDateString('en-GB', options);
  }

  return (
    <Layout>
      <View style={styles.container}>
      <CustomText style={styles.label}>Title:</CustomText>
      <TextInput
        style={styles.input}
        value={expenseName}
        onChangeText={text => setExpenseName(text)}
        placeholder="Enter expense title"
      />
      <CustomText style={styles.label}>Expense Amount:</CustomText>
      <TextInput
        style={styles.input}
        value={expenseAmount}
        onChangeText={text => setExpenseAmount(text)}
        placeholder="Enter expense amount"
        keyboardType="numeric"
      />

      <CustomText style={styles.label}>Date</CustomText>

      <View style={[styles.input, {justifyContent: "space-between", flexDirection: "row", alignItems: "center"}]}>
        <CustomText>{formatDate(chosenDate)}</CustomText>
        <Pressable onPress={() => setShowDatePicker(true)}>
            <FontAwesome name="calendar" size={24} color="black" />
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
        <CustomText style={styles.buttonText}>Add</CustomText>
      </TouchableOpacity>
    </View>
    </Layout>
  );
};

export default AddExpense;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    label: {
      fontSize: 18,
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
      backgroundColor: '#007bff',
      paddingVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });