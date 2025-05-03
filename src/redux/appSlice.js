import {createSlice} from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: "appSlice",
    initialState:{
        isOpen : false,
        emails: [],
        selectedEmail: null,
    },
    reducers:{
        // actions
        setOpen:(state, action)=>{
            state.isOpen  = action.payload;
        },
        setEmails:(state, action)=>{
            state.emails = action.payload;
        },
        setSelectedEmail:(state, action)=>{
            state.selectedEmail = action.payload;
        },

    }
});
export const {setOpen, setEmails, setSelectedEmail} = appSlice.actions;
export default appSlice.reducer;