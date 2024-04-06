import { useDispatch, useSelector } from "react-redux";

const isPortrait = useSelector(state => state.orientationReducer.isPortrait)
const expenses = useSelector(state => state.expensesReducer.expenses);



