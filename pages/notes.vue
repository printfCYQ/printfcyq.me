<template>
    <div>
        {{ appStore.count }}
        <button @click="appStore.addCount">add</button>
    </div>
</template>

<script setup lang="ts">
const appStore = useAppStore()
</script>

<style lang="scss" scoped>

</style>