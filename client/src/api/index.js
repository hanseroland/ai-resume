import axios from "axios";


export const axiosInstance = async (method, url, payload) => {

    try {
         const response = await axios({
            method,
            url: `http://localhost:5000/api/v1${url}`,
            data: payload,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          },
        ); 
        console.log("axios instanse token ==",localStorage.getItem('token'))
        return response.data 
    } catch (error) {
        return error;
    }
}  

export const axiosInstanceUploade = async (method, url, payload) => {
    try {
        const response = await axios({
            method,
            url: `http://localhost:5000/api/v1${url}`,
            data: payload,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "multipart/form-data",
            }

        },


        );
        return response.data
    } catch (error) {
        return error;
    }
} 