import type {AxiosResponse} from 'axios';
import axios from 'axios';

export default {
    user: async(): Promise<AxiosResponse> =>{
        try{
            const response: AxiosResponse = await axios.get('http://localhost:3000/users?_expand=career')
            return response.data;
        }catch(e){
            throw new Error(`Ocurrió un error: ${e}`);
        }
    },
    createUser: async(data): Promise<AxiosResponse> => {
        try{
            const response: AxiosResponse = await axios.post('http://localhost:3000/users', data)
            return response.data;
        }catch(e){
            throw new Error(`Ocurrió un error: ${e}`);
        }
    },
    userByID: async(id = 1): Promise<AxiosResponse> =>{
        try{
            const response: AxiosResponse = await axios.get(`http://localhost:3000/users/${id}?_expand=career`)
            return response.data;
        }catch(e){
            throw new Error(`Ocurrió un error: ${e}`);
        }
    },
    updateUser: async(id: number, data): Promise<AxiosResponse> => {
        try{
            const response: AxiosResponse = await axios.put(`http://localhost:3000/users/${id}`, data)
            return response.data;
        }catch(e){
            throw new Error(`Ocurrió un error: ${e}`);
        }
    },
    deleteUser: async(id: number): Promise<AxiosResponse> => {
        try{
            const response: AxiosResponse = await axios.delete(`http://localhost:3000/users/${id}`)
            return response.data;
        }catch(e){
            throw new Error(`Ocurrió un error: ${e}`);
        }
    }
}
