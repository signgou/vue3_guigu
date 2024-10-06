<template>
  <div class="root">
    <h1>hello</h1>
    <el-button>hhh</el-button>
    <el-icon>
      <FullScreen />
    </el-icon>
    <svg-icon name="test" width="200px" height="200px" color="blue"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import {reqLogin} from '@/api/user'
import { onMounted } from 'vue'

onMounted(() => {
  reqLogin({
    username: 'admin',
    password: '111111'
  }).then(
    res=>{
      console.log(res);
    },
    err=>{
      console.log("出错了",err);
    }
  )
})
</script>

<style lang="scss">
.root{
  h1{
    color: red;
  }
}
</style>