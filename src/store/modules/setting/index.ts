import { defineStore } from "pinia";

//用于折叠菜单
const useLayoutSettingStore = defineStore("SettingStore",{
  state(){
    return {
      fold:false,
    }
  },
  actions:{
    changeFold(){
      this.fold  = !this.fold;
    }
  }
})

export default useLayoutSettingStore;
