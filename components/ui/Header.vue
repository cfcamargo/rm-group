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

                <div class="xs:hidden md:flex items-center gap-2 relative" @mouseleave="locationDropDown = false">
                    <a href="https://rmagro.aebroadcast.com.br/login" target="_blank" class="xs:hidden md:flex justify-center items-center px-8 py-2 rounded-lg bg-primary text-secondary">{{ $t("Área do Cliente") }}</a>
                    <button @mouseenter="locationDropDown = true">
                        <IconBrasilFlag :icon_height="30" v-if="locationSelected === 'pt-br'"/>
                        <IconUSAFlag :icon_height="30"  v-if="locationSelected === 'en-us'"/>
                        <IconSpanishFlag :icon_height="30"  v-if="locationSelected === 'es-es'"/>
                    </button>

                    <div class="flex flex-col gap-2 bg-primary absolute top-10 right-0 p-4 rounded-md shadow-md" v-if="locationDropDown">
                        <div class="flex items-center gap-2 text-secondary cursor-pointer" @click="selectLocation('pt-br')">
                            <IconBrasilFlag />
                            <span>PT-BR</span>
                        </div>
                        <div class="flex items-center gap-2 text-secondary cursor-pointer" @click="selectLocation('en-us')">
                            <IconUSAFlag />
                            <span>EN-US</span>
                        </div>
                        <div class="flex items-center gap-2 text-secondary cursor-pointer" @click="selectLocation('es-es')">
                            <IconSpanishFlag />
                            <span>ES-ES</span>
                        </div>
                    </div>
                </div>


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
                        <div class="flex justify-between py-2">
                            <div class="flex items-center gap-2 text-secondary cursor-pointer border rounded-md border-primary p-2" :class="locationSelected === 'pt-br' ? 'bg-primary' : 'bg-white'" @click="selectLocation('pt-br')">
                                <IconBrasilFlag />
                                <span>PT-BR</span>
                            </div>
                            <div class="flex items-center gap-2 text-secondary cursor-pointer border rounded-md border-primary p-2" :class="locationSelected === 'en-us' ? 'bg-primary' : 'bg-white'" @click="selectLocation('en-us')">
                                <IconUSAFlag />
                                <span>EN-US</span>
                            </div>
                            <div class="flex items-center gap-2 text-secondary cursor-pointer border rounded-md border-primary p-2" :class="locationSelected === 'es-es' ? 'bg-primary' : 'bg-white'" @click="selectLocation('es-es')">
                                <IconSpanishFlag />
                                <span>ES-ES</span>
                            </div>
                        </div>
                        <a href="https://rmagro.aebroadcast.com.br/login" target="_blank" class="flex justify-center items-center w-full px-8 py-2 rounded-lg bg-primary text-secondary">{{ $t("Área do Cliente") }}</a>
                    </div>
                </nav>
            </transition>
        </nav>
    </div>
</template>

<script setup lang="ts">
import 'animate.css';

const { locale, setLocale } = useI18n()

const showMenu = ref(false)
const locationSelected = ref('pt-br')
const locationDropDown = ref(false)

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


const selectLocation = (location: string) => {
    locationSelected.value = location
    locationDropDown.value = false
    setLocale(location)
}

onMounted(() => {
    const browserLanguage = navigator.language.split('-')[0]
    if (browserLanguage === 'pt') {
        locationSelected.value = 'pt-br'
        setLocale('pt-br')
    } else if (browserLanguage === 'en') {
        locationSelected.value = 'en-us'
        setLocale('en-us')
    } else if (browserLanguage === 'es'){
        locationSelected.value = 'es-es'
        setLocale('es-es')
    }
})

</script>