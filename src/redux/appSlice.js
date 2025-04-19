import {createSlice} from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: "appSlice",
    initialState:{
        isOpen : false
    },
    reducers:{
        // action
        setOpen:(state, action)=>{
            state.isOpen  = action.payload;
        }
    }
});
export const {setOpen} = appSlice.actions;
export default appSlice.reducer;