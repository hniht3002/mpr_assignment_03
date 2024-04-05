import { combineReducers } from '@reduxjs/toolkit';
import expenseReducer from "../slice/slice"

const rootReducer = combineReducers({
    expense: expenseReducer
})

export default rootReducer