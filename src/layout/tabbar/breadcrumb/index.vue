<template>
  <!-- 左侧图标 -->
  <el-icon style="margin-right: 10px;" @click="changeFold">
    <Fold v-show="!fold" />
    <Expand v-show="fold" />
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting';
import { storeToRefs } from 'pinia';
const layoutSettingStore = useLayoutSettingStore();
const { fold } = storeToRefs(layoutSettingStore);
const { changeFold } = layoutSettingStore;

</script>

<script lang="ts">
export default {
  name: "TheBreadcrumb",
}
</script>

<style lang="scss" scoped></style>
