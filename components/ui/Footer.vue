<template>
    <footer class="w-full py-10 border-t-2 bg-contain bg-no-repeat" :class="setStyle">
        <Container class="grid xs:grid-cols-1 xs:gap-8 md:gap-4 md:grid-cols-3">
            <div class="flex flex-col gap-4">
                <h4 class="font-bold" :class="layoutStore.getFooterColor === 'blue' ? 'text-primary' : 'text-secondary'">Links</h4>

                <div class="flex flex-col gap-2" :class="layoutStore.getFooterColor === 'blue' ? 'text-white' : 'text-secondary'">
                    <NuxtLink to="/" class="text-sm">{{ $t("Home") }}</NuxtLink>
                    <NuxtLink to="/about" class="text-sm">{{ $t("Sobre") }}</NuxtLink>
                    <NuxtLink to="/services" class="text-sm">{{ $t("Serviços") }}</NuxtLink>
                    <NuxtLink to="/biography" class="text-sm">{{ $t("Biografia") }}</NuxtLink>
                    <NuxtLink to="/companies" class="text-sm">{{  $t("Parceiros") }}</NuxtLink>
                    <NuxtLink to="#contact" class="text-sm">{{ $t("Contato") }}</NuxtLink>
                </div>
            </div>

            <div class="flex flex-col gap-6" id="contact">
                <div class="flex flex-col gap-2">
                    <h4 class="font-bold" :class="layoutStore.getFooterColor === 'blue' ? 'text-primary' : 'text-secondary'">{{ $t("Contato") }}</h4>
                    <div class="flex flex-col gap-2" :class="layoutStore.getFooterColor === 'blue' ? 'text-white' : 'text-secondary'">
                        <a href="https://api.whatsapp.com/send?phone=5565999377184" target="_blank" class="flex items-center gap-2">
                            <IconWhatsapp :color="setIconStyle" />
                            <span>Whatsapp</span>
                        </a>
                        <a href="mailto:rodrigo@rmgroup.com.br" class="flex items-center gap-2">
                            <IconMail :color="setIconStyle" />
                            <span>rodrigo@rmgroup.com.br</span>
                        </a>
                    </div>
                </div>

                <div class="flex flex-col gap-4">
                    <h4 class="font-bold" :class="layoutStore.getFooterColor === 'blue' ? 'text-primary' : 'text-secondary'">{{ $t("Redes Sociais") }}</h4>
                    <div class="flex flex-col gap-2" :class="layoutStore.getFooterColor === 'blue' ? 'text-white' : 'text-secondary'">
                        <a href="https://www.instagram.com/rmg.agro?igsh=OHluYjdhd3kyMTdk" target="_blank" class="flex items-center gap-2">
                            <IconInstagram :color="setIconStyle" />
                            <span>@rmg.agro</span>
                        </a>
                        <!-- <a href="mailto:rodrigo@rmgroup.com.br" class="flex items-center gap-2">
                            <IconLinkedin :color="setIconStyle" />
                            <span>RM AGRO</span>
                        </a> -->
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-2 w-full justify-start xs:text-center md:items-end xs:mt-10 md:mt-0">
                <NuxtImg src="/logoWithWhite.png" v-if="layoutStore.getFooterColor === 'blue'" class="w-[150px] xs:mx-auto md:mx-0"/>
                <NuxtImg src="/logoBlue.png" class="w-[150px] xs:mx-auto md:mx-0" v-else/>
                <span :class="layoutStore.getFooterColor === 'blue' ? 'text-white' : 'text-secondary'">www.rmgroup.com.br</span>


                <p class="text-xs mt-20" :class="layoutStore.getFooterColor === 'blue' ? 'text-white' : 'text-secondary'">© 2023 - {{ dateNow }} RM Group. {{ $t("Todos os direitos reservados.") }}</p>
            </div>
        </Container>

    </footer>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/store'

const layoutStore = useLayoutStore()

const setStyle = computed<string>(() => {
    if(layoutStore.getFooterColor === 'blue') {
        return "bg-secondary border-primary bg-[url('/icon-blue.png')]"
    } else {
        return "bg-primary border-secondary bg-[url('/icon-green.png')]"
    }
})

const setIconStyle = computed<string>((): string => {
    if(layoutStore.getFooterColor === 'blue') {
        return "fill-current text-white"
    } else {
        return "fill-current text-secondary"
    }
})

const dateNow = new Date().getFullYear()


</script>
