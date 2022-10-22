// @ts-ignore
import axios,{AxiosResponse,AxiosRequestConfig} from "axios"
import { useUserStore } from "@/store/user";
const userStore = useUserStore()
const service = axios.create(
    {
        baseURL: "http://localhost:3000",
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
        },
    }
)

//请求拦截
service.interceptors.request.use(
    (config:AxiosRequestConfig)=>{
        if(userStore.token!==null && userStore.token!== ''){
        // @ts-ignore
            config.headers.Authorization = userStore.token
        }
        return config
    },
    (error:any)=>{
        console.log(error)
    }
)
service.interceptors.response.use(
    async (response:AxiosResponse)=>{
        return response
    },
    (error:any)=>{
        return Promise.reject(error)
    }
)

export default  service
