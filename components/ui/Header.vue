<template>
    <div class="w-full xs:px-2 md:px-8 py-4 " :class="showMenu ? 'xs:h-dvh md:h-auto' : ''">
        <nav class="w-full bg-white border flex flex-col rounded-md shadow transition-all ease-in-out" :class="showMenu ? 'xs:h-full md:h-20' : 'h-20'">
            <Container class="flex justify-between xs:h-20 md:h-full items-center">
                <NuxtLink to="/" class="xs:w-[130px] md:w-[150px]">
                    <Logo />
                </NuxtLink>

                <div class="xs:hidden md:flex gap-4">
                    <NuxtLink to="/" class="text-secondary font-bold hover:text-primary">Home</NuxtLink>
                    <NuxtLink to="/services" class="text-secondary font-bold hover:text-primary">Serviços</NuxtLink>
                    <NuxtLink to="/about" class="text-secondary font-bold hover:text-primary">Sobre</NuxtLink>
                    <NuxtLink to="/biography" class="text-secondary font-bold hover:text-primary">Biografia</NuxtLink>
                    <NuxtLink to="/companies" class="text-secondary font-bold hover:text-primary">Parceiros</NuxtLink>
                    <NuxtLink to="/contact" class="text-secondary font-bold hover:text-primary">Contato</NuxtLink>
                </div>

                <a href="#" class="xs:hidden md:flex justify-center items-center px-8 py-2 rounded bg-primary text-secondary">Área do Cliente</a>


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
                    <NuxtLink to="/" class="text-secondary font-bold hover:text-primary">Home</NuxtLink>
                    <NuxtLink to="/services" class="text-secondary font-bold hover:text-primary">Serviços</NuxtLink>
                    <NuxtLink to="/about" class="text-secondary font-bold hover:text-primary">Sobre</NuxtLink>
                    <NuxtLink to="/biography" class="text-secondary font-bold hover:text-primary">Biografia</NuxtLink>
                    <NuxtLink to="/companies" class="text-secondary font-bold hover:text-primary">Parceiros</NuxtLink>
                    <NuxtLink to="/contact" class="text-secondary font-bold hover:text-primary">Contato</NuxtLink>
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