<template>
  <div class="logo" v-if="logo.isNeeded">
    <img :src="logo.logo" alt="logo">
    <p v-show="!fold">{{ logo.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { logo } from '@/setting';
defineProps(["fold"])
</script>

<script lang="ts">
export default {
  name: "TheLogo",
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $base-main-logo-padding;
  overflow: hidden;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    font-size: $base-main-logo-fontSize;
    margin-left: 5px;
    font-weight: bold;
  }
}
</style>
