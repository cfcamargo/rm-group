<template>
    <div class="w-full py-20">
        <Container>
            <h4 class="font-bold text-3xl text-primary">NOTÍCIAS</h4>
        </Container>

        <div class="mt-[200px] w-full bg-primary h-[300px]">
            <Container class="grid grid-cols-4 -translate-y-[100px]">
                <NuxtLink to="/news/1">
                    <div class="w-full h-[300px] bg-white rounded-md overflow-hidden shadow-md flex-flex-col">
                        <div class="w-full h-[120px] bg-cover bg-[url('/news-1.jpg')]">
                            
                        </div>

                        <div class="flex-1 flex flex-col gap-6 p-4">
                            <span class="font-bold text-primary">RM Agro inova no agronegócio</span>

                            <p class="overflow-ellipsis">A R.M Agro é uma empresa pioneira...</p>

                            <NuxtLink to="/news/1" class="text-primary font-bold">Ler mais</NuxtLink>
                        </div>
                    </div>
                </NuxtLink>
            </Container>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>
