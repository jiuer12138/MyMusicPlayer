import request from "@/utils/request";

export const loginAPI = (params:object)=>request({
    url:'/login',
    params:params
})



