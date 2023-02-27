import {createAction} from "@reduxjs/toolkit";
// @ts-ignore
import {Axios, axios} from 'axios'

export const signUpAction = createAction("auth/signUpAction", async (): Axios => {
    const res = await axios.get("http://147.182.152.232:5000/users/add")
    console.log(res.data)
})
