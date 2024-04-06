import { createSlice } from '@reduxjs/toolkit';
import { Dimensions } from "react-native";
const getInitialOrientation = () => {
    const { height, width } = Dimensions.get("window");
    return height > width ? true : false; 
};
const orientationSlice = createSlice({
    name: "orientation",
    initialState : {isPortrait: getInitialOrientation()},
    reducers: {
        updateIsPortrait: (state, action) => {
            state.isPortrait = action.payload
        }
    }
})

export const {updateIsPortrait} = orientationSlice.actions
export default orientationSlice