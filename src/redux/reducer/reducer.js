import { combineReducers } from '@reduxjs/toolkit';
import expenseSlice from '../slice/expenseSlice';
import orientationSlice from '../slice/orientationSlice';

const rootReducer = combineReducers({
    expensesReducer: expenseSlice.reducer,
    orientationReducer: orientationSlice.reducer
})

export default rootReducer