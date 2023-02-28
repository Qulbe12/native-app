import {IAuthUser, IRegister, IStepOne, IStepTwo} from "../interfaces/dtos";
import {createSlice} from "@reduxjs/toolkit";
import {signInAction, signUpAction} from "./actions/authAction";

export interface IAuthState {
    user?: IAuthUser
    stepOne: IStepOne
    register: IRegister
    stepTwo: IStepTwo
    token: string
    loading: boolean
    errors?: string
}

const initialState: IAuthState = {
    register: {name: "", password: ""},
    stepOne: {
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        screenName: ""
    },
    stepTwo: {
        streetNumber: "",
        streetName: "",
        city: "",
        country: "",
        phone: ""
    },
    loading: false,
    token: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        register: (state, action) => {
            state.register = action.payload
        },
        stepOne: (state, action) => {
            state.stepOne = action.payload
        },
        stepTwo: (state, action) => {
            state.stepTwo = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            // sign up action
            .addCase(signUpAction.pending, (state) => {
                state.loading = true
            })
            .addCase(signUpAction.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(signUpAction.rejected, (state) => {
                state.loading = false
            })
            //Sign in action
            .addCase(signInAction.pending, (state) => {
                state.loading = true
            })
            .addCase(signInAction.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(signInAction.rejected, (state) => {
                state.loading = false
            })
    }
})

const authReducer = authSlice.reducer
export const {register, stepTwo, stepOne} = authSlice.actions

export default authReducer
