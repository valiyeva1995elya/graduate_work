import axios from "axios"

const apiClient = axios.create({
    baseURL: "http://universities.hipolabs.com/search?country"
})

apiClient.interceptors.response.use(
    (response) => {
        console.log("API", response);
        return response        
    }, 
    (error) => {
        console.log("API ERROR: ", error );
        return Promise.reject(error)   
    }
)
export default apiClient;