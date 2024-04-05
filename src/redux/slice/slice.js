import { createSlice } from '@reduxjs/toolkit';
const expenseSlice = createSlice({
    name: 'expense',
    initialState: {
        expenses: [],
    },
    reducers: {
      addExpense: (state, action) => {
        state.expenses.push(action.payload);
      },
      editExpense: (state, action) => {
        const { id, newData } = action.payload;
        state.expenses = state.expenses.map(expense =>
            expense.id === id ? { ...expense, ...newData } : expense
        );
      },
      deleteExpense: (state, action) => {
        const idToDelete = action.payload;
        state.expenses = state.expenses.filter(expense => expense.id !== idToDelete);
      }
    },
  });

export const {add, edit, deleteExpense} = expenseSlice.actions
export default expenseSlice.reducer;