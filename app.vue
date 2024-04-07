<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'RM AGRO | Consultoria e Gestão de Risco',
  meta: [
    { name: 'description', content: 'A RM Agro é uma empresa de consultoria especializada em gestão de riscos no agronegócio.' },
    { name: 'keywords', content: 'RM Agro, Consultoria, Gestão de Risco, Agronegócio, Trading, Commodities, Logística, Transporte, Combustíveis, Insumos, Biocombustíveis, Derivados de Petróleo' }
  ],
  bodyAttrs: {
    class: 'test'
  },
})

useSeoMeta({
  title: 'RM AGRO | Consultoria e Gestão de Risco',
  ogTitle: 'RM AGRO | Consultoria e Gestão de Risco',
  description: 'A RM Agro é uma empresa de consultoria especializada em gestão de riscos no agronegócio.',
  ogDescription: 'A RM Agro é uma empresa de consultoria especializada em gestão de riscos no agronegócio.',
  ogImage: '/social-og.png',
  twitterCard: 'summary_large_image',
})


</script>
