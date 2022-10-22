import {defineStore} from "pinia";
const myToken = 'MY_MUSIC_PLAYER_TOKEN'
export const useUserStore =defineStore({
    id:'user',
    state:()=>{
        return {
            token:''||localStorage.getItem(myToken)
        }
    },
    actions:{
        updateToken(token:string){
            this.token=token
        }
    },
    // 使用该插件，开启数据缓存
    persist: {
        //这里存储默认使用的是session
        enabled: true,
        strategies: [
            {
                //key的名称
                key: myToken,
                //更改默认存储，更改为localStorage
                storage: localStorage,
                // 可以选择哪些进入local存储，这样就不用全部都进去存储了
                // 默认是全部进去存储
                paths: ['token']
            }
        ]
    }
})
