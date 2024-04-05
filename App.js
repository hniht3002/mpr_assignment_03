import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomText from './src/components/CustomText/CustomText';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './src/redux/reducer/reducer';

export default function App() {
  
  const store = configureStore({
    reducer: rootReducer
  })
  return (
   <Provider store={store}>
    <AppNavigation/>
   </Provider>
  );
}
