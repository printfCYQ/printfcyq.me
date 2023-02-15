<template>
    <p>
        {{ str }}
        <span class="typewrite-line">|</span>
    </p>
</template>

<script setup lang="ts">
const props = defineProps({
    word: {
        type: String,
        default: '早春不过一棵树'
    },
    step: {
        type: Number,
        default: 800
    }
})
const str = ref<string>('')
const timer = ref<any>(0)

onMounted(async () => {
    let index = 0
    timer.value = setInterval(() => {
        index++
        str.value = props.word.substring(0, index)
        if (index === props.word.length + 1) {
            let timer: any = setInterval(() => {
                index--
                str.value = props.word.substring(0, index)
                if (index === 0) {
                    clearInterval(timer)
                }
            }, 100)
        }
    }, props.step)
})

onBeforeUnmount(() => {
    clearInterval(timer.value)
})
</script>

<style scoped lang="scss">
.typewrite-line {
    opacity: 1;
    animation: anHidden .8s infinite ease-in-out;
    will-change: opacity;
}

@keyframes anHidden {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}
</style>