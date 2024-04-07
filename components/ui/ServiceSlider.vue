<template>
    <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperAutoplay, SwiperController, SwiperNavigation, SwiperPagination]"
        :slides-per-view="sliderPerView"
        :navigation="true"
        :pagination="true"
        :loop="true"
        :autoplay="{
            delay: 8000,
            disableOnInteraction: false,
        }"
    >
        <SwiperSlide v-for="(image, index) in images" :key="index" class="mb-2">
            <div class="p-4">
                <NuxtImg :src="image" class="h-[548px] w-full object-cover rounded-lg"/>
            </div>
        </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
const { images } = defineProps<{
    images: string[]
}>()

const sliderPerView = ref(2)


onMounted(() => {
    if(window.innerWidth < 430) {
        sliderPerView.value = 1
    }
})

</script>

<style scoped>

</style>