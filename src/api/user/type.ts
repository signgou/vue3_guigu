//登录接口所需要的类型
export interface loginForm{
  username:string,
  password:string
}

interface resData{
  token?:string,
  message?:string
}
//登录接口返回的数据类型
export interface loginResData{
  code:number,
  data:resData
}

//用户信息类型
interface userInfo{
  userId: number,
  avatar:string,
  username: string,
  password: string,
  desc: string,
  roles: string[],
  buttons: string[],
  routes: string[],
  token: string,
}
export interface userResData{
  code:number,
  data:{
    checkUser:userInfo
  }
}