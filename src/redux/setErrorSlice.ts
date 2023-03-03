import {createSlice} from "@reduxjs/toolkit";

interface IErrorState {
    error: boolean
}



const initialState: IErrorState = {
    error : false
}

const erroSlice = createSlice({
    name:"error",
    initialState,
    reducers:{
        setSignUpError: (state) => {
            state.error = true
        }
    },
})

const errorReducer = erroSlice.reducer
export const {setSignUpError} = erroSlice.actions
export default errorReducer
