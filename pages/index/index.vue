<template>
    <BannerHero />
    <HomeAbout />
    <HomeServices />
    <HomeGadgets />
    <HomeWidgets />
    <HomeNews />
    <HomeCompanies />
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/store'

onMounted(() => {
    useLayoutStore().setFooterColor('blue')
})

</script>