
import { View,  StyleSheet } from 'react-native';
import Layout from "../layout/Layout"
import { useRoute } from '@react-navigation/native';
import InputForm from '../components/InputForm/InputForm';
import { LogBox } from 'react-native';
function EditExpense() {
  const route = useRoute();
  const { expense, id } = route.params;
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
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
  }
});