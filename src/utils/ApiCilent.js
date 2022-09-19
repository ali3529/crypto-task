import  useAxios  from "./ApiSevice"

export const loginUser = (userData) => {

    return useAxios.post('login',userData);
}

export const registerUser = (userData) => {

    return useAxios.post('register',userData);
}