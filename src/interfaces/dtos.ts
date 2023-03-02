export interface IUser {
    createdAt: string
    updatedAt: string
    parent_id: number,
    deletedAt: string,
    id: number,
    first_name: string,
    last_name: string,
    company_name: string
    uuid: string
    username: string,
    email: string,
    mobile: string,
    password: string,
    street_number: string
    street_name: string
    city: string
    country: string
    dob: string
    screenName: string
    contactPersonName: string
    contactPersonPhone: string
    address: string,
    photo: string,
    user_type_id: number,
    status: number,
    web_token: number
    UserRoles: string[]
}

export interface IAuthUser {
    token: string
    authUser: IUser
}

export interface ISignIn {
    email: string,
    password: string,
}

export interface ISignUp {
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    mobile: string,
    password: string,
    address: string,
    photo: string,
    user_type_id: number,
    status: number,
    web_token: number
}

export interface ISignUpResponse {
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    mobile: string,
    password: string,
    address: string,
    photo: string,
    user_type_id: number,
    status: number,
    web_token: number
}

export interface IRegister {
    name: string
    password: string
}

export interface IStepOne {
    firstName: string,
    lastName: string,
    email: string,
    dateOfBirth: string,
    screenName: string
}

export interface IStepTwo {
    streetNumber: string,
    streetName: string,
    city: string,
    country: string,
    phone: string
}

interface IMerchantsRow {
    "id": number,
    "parent_id": number,
    "first_name": string,
    "last_name": string,
    "company_name": string,
    "uuid": string,
    "username": string,
    "email": string,
    "mobile": string,
    "password": string,
    "street_number": string,
    "street_name": string,
    "city": string,
    "country": string,
    "dob": Date,
    "screenName": string,
    "contactPersonName": string,
    "contactPersonPhone": string,
    "address": string,
    "photo": string,
    "user_type_id": number,
    "status": string,
    "web_token": string,
    "createdAt": Date,
    "updatedAt": Date,
    "deletedAt": Date
}

interface IMerchants {
    count: number
    rows: IMerchantsRow[]
}

export interface IMerchantsResponse {
    merchants: IMerchants
}
