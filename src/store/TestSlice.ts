import {createSlice, PayloadAction} from "@reduxjs/toolkit";
interface ITodo {
    sas: number
}
const initialState = {

   sas: 10
}

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.sas = action.payload.sas
        }
    }


})
export const {addTodo} = TodoSlice.actions
export const TodoReducer = TodoSlice.reducer