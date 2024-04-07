import { View, Platform, StyleSheet, ScrollView } from 'react-native';
import Layout from "../layout/Layout"
import InputForm from '../components/InputForm/InputForm';
function AddExpense() {
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