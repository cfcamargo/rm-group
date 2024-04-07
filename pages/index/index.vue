<template>
    <BannerHero />
    <HomeAbout />
    <HomeServices />
    <HomeGadgets />
    <HomeNews />
    <HomeCompanies />
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/store'

useHead({
  title: 'RM AGRO | Consultoria e Gestão de Risco',
})

onMounted(() => {
    useLayoutStore().setFooterColor('blue')
})

</script>