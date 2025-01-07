<template>
  <!--一些功能按钮 -->
  <el-button icon="Refresh" circle />
  <el-button icon="FullScreen" circle />
  <el-button icon="Setting" circle />
  <img src="/favicon.ico" alt="头像" style="margin: 0 10px;">

  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">

</script>
<script lang="ts">
export default {
  name: "TheSetting",
}
</script>

<style lang="scss" scoped>
img {
  height: 24px;
  width: 24px;
}
</style>
