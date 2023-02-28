import {IAuthUser} from "../interfaces/dtos";
import {createSlice} from "@reduxjs/toolkit";
import {signInAction, signUpAction} from "./actions/authAction";

export interface IAuthState{
    user?: IAuthUser
    token: string
    loading: boolean
    errors?: string
}

const initialState: IAuthState = {
    loading: false,
    token: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            // sign up action
            .addCase(signUpAction.pending , (state)=>{
            state.loading = true
        })
            .addCase(signUpAction.fulfilled , (state, action)=>{
            state.loading = false
            state.user = action.payload
        })
            .addCase(signUpAction.rejected , (state)=>{
            state.loading = false
        })
            //Sign in action
            .addCase(signInAction.pending, (state)=>{
            state.loading = true
        })
            .addCase(signInAction.fulfilled , (state, action)=>{
            state.loading = false
            state.user = action.payload
        })
            .addCase(signInAction.rejected , (state)=>{
            state.loading = false
        })
    }
})

const authReducer = authSlice.reducer

export default authReducer
