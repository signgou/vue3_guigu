<template>
  <template v-for="menuItem in menuList" :key="menuItem.name">
    <template v-if="!menuItem.meta.hidden">
      <el-menu-item v-if="!menuItem.children" :index="menuItem.name" @click="go">
        <el-icon>
          <component :is="menuItem.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ menuItem.meta.title }}</span>
        </template>
      </el-menu-item>

      <el-menu-item v-else-if="menuItem.children.length === 1" :index="menuItem.children[0].name" @click="go">
        <el-icon>
          <component :is="menuItem.children[0].meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ menuItem.children[0].meta.title }}</span>
        </template>
      </el-menu-item>

      <el-sub-menu v-else :index="menuItem.name">
        <template #title>
          <el-icon>
            <component :is="menuItem.meta.icon"></component>
          </el-icon>
          <span>{{ menuItem.meta.title }}</span>
        </template>
        <TheMenu :menu-list="menuItem.children"></TheMenu>
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts">
import type { MenuItemClicked } from 'element-plus';
import { useRouter } from 'vue-router';
defineProps(["menuList"]);
const router = useRouter();
const go = (vc: MenuItemClicked) => {
  router.push({ name: vc.index });
}
</script>

<script lang="ts">
export default {
  name: "TheMenu",
}
</script>
<style lang="scss" scoped></style>
