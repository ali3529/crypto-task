import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
const useAxios =  axios.create({
        baseURL: 'https://reqres.in/api/',
    })
useAxios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 400) {
        toast.error(error.response.data.error)
      }
    });


export default useAxios;