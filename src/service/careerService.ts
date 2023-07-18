import type {AxiosResponse} from 'axios';
import axios from 'axios';

export default {
    career: async(): Promise<AxiosResponse> =>{
        try{
            const response: AxiosResponse = await axios.get('http://localhost:3000/careers')
            return response.data;
        }catch(e){
            throw new Error(`Ocurrió un error: ${e}`);
        }
    },
    createCareer: async(data): Promise<AxiosResponse> => {
        try{
            const response: AxiosResponse = await axios.post('http://localhost:3000/careers', data)
            return response.data;
        }catch(e){
            throw new Error(`Ocurrió un error: ${e}`);
        }
    },
}
