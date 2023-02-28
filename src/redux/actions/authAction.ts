import {createAsyncThunk} from "@reduxjs/toolkit";
// @ts-ignore
import axios, {Axios} from 'axios'
import {IAuthUser, ISignIn, ISignUp} from "../../interfaces/dtos";

export const signUpAction = createAsyncThunk("auth/signUpAction", async (form: ISignUp) => {
    try {
        const res = await axios.post<IAuthUser>("http://147.182.152.232:5000/users/add", form)
        console.log(res.data)
        return res.data
    } catch (e) {
        console.log(e)
    }
})

export const signInAction = createAsyncThunk("auth/signInAction", async (form: ISignIn) => {
    const res = await axios.post<IAuthUser>("http://147.182.152.232:5500/login", form)
    console.log(res.data)
    return res.data
})
