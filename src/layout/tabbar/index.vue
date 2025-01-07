<template>
  <div class="tabbar">
    <!-- 左侧 -->
    <div class="tabbar-left">
      <Breadcrumb></Breadcrumb>
    </div>

    <!-- 右侧 -->
    <div class="tabbar-right">
      <Setting></Setting>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from "./breadcrumb/index.vue"
import Setting from "./setting/index.vue"
</script>

<script lang="ts">
export default {
  name: "TheTabbar",
}
</script>

<style lang="scss" scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .tabbar-left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .tabbar-right {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
}
</style>
