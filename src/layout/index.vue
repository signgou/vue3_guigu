<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider" :class="{ fold }">
      <!-- logo区 -->
      <Logo :fold="fold" />
      <!-- 导航区 -->
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#22221b" text-color="white" :default-active="$route.name" :collapse="fold">
          <Menu :menu-list="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>

    <!-- 顶部导航 -->
    <div class="layout_tabbar" :class="{ fold }">
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示区 -->
    <div class="layout_main" :class="{ fold }">
      <Main></Main>
    </div>

  </div>
</template>

<script setup lang="ts">
import Logo from "./logo/index.vue"
import useUserStore from "@/store/modules/user"
import Menu from "./menu/index.vue"
import Main from "./main/index.vue"
import Tabbar from "./tabbar/index.vue"
import useLayoutSettingStore from '@/store/modules/setting';
import { storeToRefs } from "pinia"
const userStore = useUserStore();
const layoutSettingStore = useLayoutSettingStore();
const { fold } = storeToRefs(layoutSettingStore);
</script>

<script lang="ts">
export default {
  name: "TheLayout",
}
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;


  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    transition: width 0.5s ease;

    .scrollbar {
      color: white;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: 0;
      }
    }

    &.fold {
      width: $base-menu-min-width;
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top: 0;
    left: $base-menu-width;
    transition: all 0.5s ease;

    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    background-color: yellow;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    top: $base-tabbar-height;
    left: $base-menu-width;
    padding: $base-main-padding;
    overflow: auto;
    transition: all 0.5s ease;

    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
