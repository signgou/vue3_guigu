import request from "@/utils/request";
import type { loginForm,loginResData,userResData } from "./type";
//统一管理接口
enum API{
  LOGIN_URL = "/user/login",
  USERINFO_URL = "user/info"
}
//暴露请求函数
//登录接口方法
export const reqLogin = (data:loginForm) =>request.post<any,loginResData>(API.LOGIN_URL,data);
//获取用户信息接口
export const reqUserInfo = () => request.get<any,userResData>(API.USERINFO_URL);