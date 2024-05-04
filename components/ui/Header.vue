<template>
    <div class="w-full xs:px-2 md:px-8 py-4 " :class="showMenu ? 'xs:h-dvh md:h-auto' : ''">
        <nav class="w-full bg-white border flex flex-col rounded-md shadow transition-all ease-in-out px-2" :class="showMenu ? 'xs:h-full md:h-20' : 'h-20'">
            <Container class="flex justify-between xs:h-20 md:h-full items-center">
                <NuxtLink to="/" class="xs:w-[130px] md:w-[150px]">
                    <Logo />
                </NuxtLink>

                <div class="xs:hidden md:flex gap-4">
                    <NuxtLink to="/" class="text-secondary font-bold hover:text-primary">{{ $t("Home") }}</NuxtLink>
                    <NuxtLink to="/services" class="text-secondary font-bold hover:text-primary">{{ $t("Serviços") }}</NuxtLink>
                    <NuxtLink to="/about" class="text-secondary font-bold hover:text-primary">{{  $t("Sobre") }}</NuxtLink>
                    <NuxtLink to="/biography" class="text-secondary font-bold hover:text-primary">{{ $t("Biografia") }}</NuxtLink>
                    <NuxtLink to="/companies" class="text-secondary font-bold hover:text-primary">{{ $t("Parceiros") }}</NuxtLink>
                    <NuxtLink to="#contact" class="text-secondary font-bold hover:text-primary">{{ $t("Contato") }}</NuxtLink>
                </div>

                <a href="https://rmagro.aebroadcast.com.br/login" target="_blank" class="xs:hidden md:flex justify-center items-center px-8 py-2 rounded-lg bg-primary text-secondary">{{ $t("Área do Cliente") }}</a>


                <div class="xs:fled md:hidden">
                    <button class="hamburger" type="button" @click="toogleMenu" :class="defineAnimationToHamburgueMenu">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </Container>

            <transition enter-active-class="animate__animated animate__fadeInDown">
                <nav class="flex-1 flex flex-col gap-10 justify-center items-center py-8 text-lg" v-if="showMenu">
                    <NuxtLink to="/" class="text-secondary font-bold hover:text-primary" @click="toogleMenu">{{ $t("Home") }}</NuxtLink>
                    <NuxtLink to="/services" class="text-secondary font-bold hover:text-primary" @click="toogleMenu">{{ $t("Serviços") }}</NuxtLink>
                    <NuxtLink to="/about" class="text-secondary font-bold hover:text-primary" @click="toogleMenu">{{  $t("Sobre") }}</NuxtLink>
                    <NuxtLink to="/biography" class="text-secondary font-bold hover:text-primary" @click="toogleMenu">{{ $t("Biografia") }}</NuxtLink>
                    <NuxtLink to="/companies" class="text-secondary font-bold hover:text-primary" @click="toogleMenu">{{ $t("Parceiros") }}</NuxtLink>
                    <NuxtLink to="#contact" class="text-secondary font-bold hover:text-primary" @click="toogleMenu">Contato</NuxtLink>
                    <div class="px-2 w-full translate-y-6">
                        <a href="https://rmagro.aebroadcast.com.br/login" target="_blank" class="flex justify-center items-center w-full px-8 py-2 rounded-lg bg-primary text-secondary">{{ $t("Área do Cliente") }}</a>
                    </div>
                </nav>
            </transition>
        </nav>
    </div>
</template>

<script setup lang="ts">
import 'animate.css';

const showMenu = ref(false)

const toogleMenu = () => {
    showMenu.value = !showMenu.value
}

const defineAnimationToHamburgueMenu = computed(() => {
    if(showMenu.value) {
        return 'hamburger--spin-r is-active'
    } else {
        return 'hamburger--spin'
    }
})

</script>