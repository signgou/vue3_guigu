<template>
  <template v-for="menuItem in menuList" :key="menuItem.path">
    <template v-if="!menuItem.meta.hidden">
      <el-menu-item v-if="!menuItem.children" :index="menuItem.path">
        <template #title>
          {{ menuItem.meta.title }}
        </template>
      </el-menu-item>
      <el-sub-menu v-else :index="menuItem.path">
        <template #title>
          {{ menuItem.meta.title }}
        </template>
        <TheMenu :menu-list="menuItem.children"></TheMenu>
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts">
defineProps(["menuList"]);

</script>

<script lang="ts">
export default {
  name: "TheMenu",
}
</script>
<style lang="scss" scoped></style>
