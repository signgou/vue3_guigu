<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form :model="loginData" :rules="rules" class="login_form" ref="loginForms">
                    <h1>Hello</h1>
                    <h2>欢迎来到运营平台</h2>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginData.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                        :prefix-icon="Lock"
                        v-model="loginData.password"
                        type="password"
                        show-password
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="isLoading" type="primary" class="login_btn" @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { User,Lock } from '@element-plus/icons-vue';
import { reactive,ref} from 'vue'
import useUserStore from '@/store/modules/user';
import type { loginForm } from '@/api/user/type';
import { useRouter } from 'vue-router';
import { ElNotification, type FormInstance, type FormRules } from 'element-plus';
import { getTime } from '@/utils/time';
let userStore = useUserStore();
let router = useRouter();
let loginData:loginForm=reactive({
    username:'admin',
    password:'111111'
})
let isLoading = ref(false);
let loginForms = ref<FormInstance>();

const validatorUsername = (rule:unknown,value:string,callback:(error?: string | Error) => void)=>{
  if(value.length>=5){
    callback();
  }
  else{
    callback(new Error("账号长度至少5位"))
  }

}
const validatorPassword = (rule:unknown,value:string,callback:(error?: string | Error) => void)=>{
  if(value.length>=6){
    callback();
  }
  else{
    callback(new Error("密码长度至少6位"))
  }

}

const rules:FormRules<loginForm> = {
  username:[
    {trigger:"blur",validator:validatorUsername},
  ],
  password:[
    {trigger:"blur",validator:validatorPassword}
  ]
}

const login = async()=>{
  //校验通过才能登录
  await loginForms.value?.validate();

  isLoading.value=true;
  try{
    await userStore.userLogin(loginData);
    router.push({name:"home"});
    ElNotification({
      title:`${getTime()}好`,
      message:"欢迎回来",
      type:"success",
    })
    isLoading.value=false;
  }
  catch(err){
    isLoading.value=false;
    ElNotification({
      title:"登录失败",
      message:(err as Error).message,
      type:"error",
    })
  }
}
</script>

<style lang="scss">
    .login_container{
        width: 100%;
        height: 100vh;
        background:url("@/assets/images/background.jpg") no-repeat ;
        background-size: cover;
        .login_form{
            position: relative;
            width: 80%;
            top:30vh;
            background:url("@/assets/images/login_form.png") no-repeat ;
            background-size: cover;
            padding: 30px;
        }
        h1{
            color: white;
            font-size: 40px;
        }
        h2{
            color: white;
            font-size: 20px;
            margin: 20px 0;
        }
        .login_btn{
            width: 100%;
        }
    }
</style>
