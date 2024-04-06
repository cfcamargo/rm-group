<template>
    <NuxtLink :to="url" class="px-8 py-4 rounded shadow inline-flex justify-center items-center hover:brightness-90" :class="setButtonStyle">
        {{  text }}
    </NuxtLink>
</template>

<script setup lang="ts">
const { url , styleType, text} = withDefaults(defineProps<{
    url: string,
    text : string
    styleType?: string
}>(), {
    styleType: 'primary'
})


const setButtonStyle = computed(() => {
    if(styleType === 'primary') {
        return 'bg-primary text-secondary'
    } else {
        return 'bg-secondary text-primary'
    }
})

</script>
