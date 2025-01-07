import type { RouteRecordRaw } from "vue-router";

//user仓库相关类型
export interface userState{
  token:string,
  menuRoutes:RouteRecordRaw[],
}
