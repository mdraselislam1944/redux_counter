import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
}

const counterSlice=createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
        incrementByValue:(state,actions)=>{
            state.value+=actions.payload;
        },
        reset:(state)=>{
            state.value=0;
        }
    },
});

export const {increment,decrement,incrementByValue,reset}=counterSlice.actions;

export default counterSlice.reducer;