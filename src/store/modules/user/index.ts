//user小仓库
import { reqLogin } from "@/api/user";
import type { loginForm } from "@/api/user/type";
import { defineStore } from "pinia";
import type { userState } from "./type";
import { getToken, setToken } from "@/utils/token";
import { constRoutes } from "@/router/routes";
const useUserStore = defineStore('User',{
  state() {
    return{
      token:getToken()|| "",//用户token
      menuRoutes:constRoutes,
    } as userState
  },
  actions:{
    async userLogin(data:loginForm){
      try {
        const result = await reqLogin(data);
        if(result.code == 200){
          const token = result.data.token || "";
          this.token = token;
          setToken(token);
          return 'ok';
        }
        //失败返回失败promise
        return Promise.reject(new Error(result.data.message));
      }
      catch(err){
        return Promise.reject(new Error("登录的未知错误："+err));
      }
    }
  },
  getters:{

  }
})

export default useUserStore
