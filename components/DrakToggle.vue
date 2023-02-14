<script setup lang="ts">
function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <button :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'" icon-btn class="!outline-none"
    @click="toggleDark">
    <Icon :name="isDark ? 'ic:round-wb-sunny' : 'material-symbols:dark-mode'" />
  </button>
</template>
