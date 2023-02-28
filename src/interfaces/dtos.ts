export interface IAuthUser {
    createdAt: string
    updatedAt: string
    parent_id: number,
    deletedAt: string,
    id: number,
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
