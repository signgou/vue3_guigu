<template>
  <div class="logo" v-if="logo.isNeeded" >
    <img :src="logo.logo" alt="logo">
    <p>{{ logo.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { logo } from '@/setting';
</script>

<style lang="scss" scoped>
.logo{
  width: calc(100% - 2 * $base-main-logo-padding);
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $base-main-logo-padding;
  overflow: auto;
  img{
    width: 40px;
    height: 40px;
  }
  p{
    font-size: $base-main-logo-fontSize;
    margin-left: 20px;
    font-weight: bold;
  }
}
</style>
