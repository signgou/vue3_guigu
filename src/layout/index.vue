<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <!-- logo区 -->
      <Logo />
      <!-- 导航区 -->
      <el-scrollbar class="scrollbar">
        <el-menu background-color="black" text-color="white">
          <Menu :menu-list="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar">
      456顶部导航
    </div>
    <!-- 内容展示区 -->
    <div class="layout_main">
      <p style="height: 10000px;background-color: gray;">789内容展示区</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import Logo from "./logo/index.vue"
import useUserStore from "@/store/modules/user";
import Menu from "./menu/index.vue"
const userStore = useUserStore();
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    .scrollbar{
      color: white;
      height: calc(100vh - $base-menu-logo-height - 2 * $base-main-logo-padding);
      .el-menu{
        border-right: 0;
      }
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: $base-tabbar-background;
    top: 0;
    left: $base-menu-width;
  }

  .layout_main {
    position: absolute;
    background-color: yellow;
    width: calc(100% - $base-menu-width - 2 * $base-main-padding);
    height: calc(100vh - $base-tabbar-height - 2 * $base-main-padding);
    top: $base-tabbar-height;
    left: $base-menu-width;
    padding: $base-main-padding;
    overflow: auto;
  }
}
</style>
