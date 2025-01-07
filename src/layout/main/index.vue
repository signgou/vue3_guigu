<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">

</script>

<script lang="ts">
export default {
  name: "TheMain",
}
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
</style>
