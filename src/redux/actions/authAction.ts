import {createAsyncThunk} from "@reduxjs/toolkit";
// @ts-ignore
import axios, {Axios} from 'axios'
import {IAuthUser, ISignIn, ISignUp, ISignUpResponse} from "../../interfaces/dtos";
import {axiosInstance} from "../../config/axios";
import {Toast} from "native-base";
import {setSignUpError} from "../setErrorSlice";


export const signUpAction = createAsyncThunk("auth/signUpAction", async (form: ISignUp, {dispatch}) => {
    try {
        const res = await axiosInstance.post<ISignUpResponse>("users/add", form)
        console.log(res.data)
        console.log("hiting")
        return res.data
    } catch (e: any) {
        dispatch(setSignUpError())
        console.log("errors")
        Toast.show({
            title: "Cannot Register",
        })
    }
})

export const signInAction = createAsyncThunk("auth/signInAction", async (form: ISignIn) => {
    try {
        const res = await axiosInstance.post<IAuthUser>("login", form)
        return res.data
    } catch (e: any) {
        Toast.show({
            title: "Cannot login",
        })
    }
})
