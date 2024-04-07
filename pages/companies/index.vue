<template>
    <div class="w-full xs:h-dvh md:h-[525px] xs:bg-[url('/bg/companies-bg-mobile.png')] md:bg-[url('/bg/companies-bg.png')] bg-cover bg-center">
        <div class="banner-effect w-full h-full flex items-center">
            <Container class="w-full h-full flex xs:items-end md:items-center xs:pb-20 md:pb-0">
                <h2 class="xs:text-3xl md:text-4xl font-bold text-white">NOSSOS PARCEIROS</h2>
            </Container>
        </div>
    </div>
    <div class="py-20">
        <Container class="grid xs:grid-cols-2 md:grid-cols-4 items-center justify-center gap-20">
            <div v-for="(company, index) in companiesList" :key="index" class="w-full">
                <NuxtImg :src="company" class="w-full"/>
            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">
import { companies } from '~/models/companies';
import { useLayoutStore } from '@/store'

const companiesList = companies

onMounted(() => {
    useLayoutStore().setFooterColor('blue')
})

</script>
