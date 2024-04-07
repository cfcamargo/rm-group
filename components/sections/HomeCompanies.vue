<template>
    <div class="w-full py-20">
        <Container>
            <h4 class="font-bold text-3xl text-primary xs:text-center md:text-start">NOSSOS PARCEIROS</h4>

            <div class="mt-10">
                <Swiper
                    :modules="[SwiperAutoplay,]"
                    :slides-per-view="slidesPerView"
                    :loop="true"
                    :autoplay="{
                        delay: 2000,
                        disableOnInteraction: false,
                    }"
                >
                    <SwiperSlide v-for="(company, index) in companiesList" :key="index">
                        <div class="h-[100px] flex items-center w-full p-8">
                            <NuxtImg :src="company" class="w-full object-cover grayscale"/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">
import { companies } from '~/models/companies';

const companiesList = companies

const slidesPerView = ref(4)

onMounted(() => {
    if (window.innerWidth < 430) {
        slidesPerView.value = 2
    }
})
</script>
