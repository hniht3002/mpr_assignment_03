import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Platform, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomText from '../components/CustomText/CustomText';
import Layout from "../layout/Layout"
import { useDispatch } from 'react-redux';
import { editExpense } from '../redux/slice/expenseSlice';
import { useRoute } from '@react-navigation/native';
import InputForm from '../components/InputForm/InputForm';

function EditExpense() {
  const dispatch = useDispatch();
  const route = useRoute();
  const { expense, id } = route.params;
  const [expenseDescription, setExpenseDescription] = useState(expense.description);
  const [expenseAmount, setExpenseAmount] = useState(expense.amount);
  const [chosenDate, setChosenDate] = useState(expense.date);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    setChosenDate(new Date());
  }, []);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || chosenDate;
    setShowDatePicker(Platform.OS === 'ios');
    setChosenDate(currentDate);
  };

  const handleEdit = () => {
    
    const expense = {id: uniq, description: expenseName, amount: +expenseAmount, date: new Date(chosenDate)}
    if(expenseName.length == 0) {
      expense.description = "Untitle"
    }
    
    dispatch(editExpense({id: id, edited: expense}))
    setExpenseDescription('');
    setExpenseAmount('');
    setChosenDate(new Date())

    alert("Expense Updated")
  };

  function formatDate(date){
    // Format options for DD/MM/YY
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    
    return date.toLocaleDateString('en-GB', options);
  }

  return (
    <Layout>
      <View style={styles.container}>
        <InputForm title="Edit Expense" edit = {true} expense={expense} id={id}/>
      </View>
    </Layout>
  );
};

export default EditExpense;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  form: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 15
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
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});