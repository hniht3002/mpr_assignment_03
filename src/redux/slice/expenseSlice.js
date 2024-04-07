import { createSlice } from '@reduxjs/toolkit';
import DUMMY_EXPENSES from '../../store/data';

const expenseSlice = createSlice({
    name: 'expense',
    initialState: {
        expenses: [...DUMMY_EXPENSES],
    },
    reducers: {
      addExpense: (state, action) => {
        state.expenses.unshift(action.payload);
      },
      editExpense: (state, action) => {
        const { id, edited } = action.payload;
        const index = state.expenses.findIndex(e => e.id === id)
        
        if(index != -1) {
          state.expenses[index] = edited
        }
      },
      deleteExpense: (state, action) => {
        const id = action.payload;
        const index = state.expenses.findIndex(e => e.id === id)
        if(index != -1) {
          state.expenses.splice(index, 1)
        }
      }
    },
  });

export const {addExpense, editExpense, deleteExpense} = expenseSlice.actions
export default expenseSlice