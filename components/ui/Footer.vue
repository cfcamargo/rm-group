<template>
    <footer class="w-full py-10 border-t-2 bg-contain bg-no-repeat" :class="setStyle">
        <Container class="grid xs:grid-cols-1 xs:gap-8 md:gap-4 md:grid-cols-3">
            <div class="flex flex-col gap-4">
                <h4 class="font-bold" :class="styleType === 'blue' ? 'text-primary' : 'text-secondary'">Links</h4>

                <div class="flex flex-col gap-2" :class="styleType === 'blue' ? 'text-white' : 'text-secondary'">
                    <NuxtLink to="/" class="text-sm">Home</NuxtLink>
                    <NuxtLink to="/" class="text-sm">Sobre</NuxtLink>
                    <NuxtLink to="/" class="text-sm">Serviços</NuxtLink>
                    <NuxtLink to="/" class="text-sm">Biografia</NuxtLink>
                    <NuxtLink to="/" class="text-sm">Parceiros</NuxtLink>
                    <NuxtLink to="/" class="text-sm">Contato</NuxtLink>
                </div>
            </div>

            <div class="flex flex-col gap-6" id="contact">
                <div class="flex flex-col gap-2">
                    <h4 class="font-bold" :class="styleType === 'blue' ? 'text-primary' : 'text-secondary'">Contato</h4>
                    <div class="flex flex-col gap-2" :class="styleType === 'blue' ? 'text-white' : 'text-secondary'">
                        <a href="" class="flex items-center gap-2">
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
                    <h4 class="font-bold" :class="styleType === 'blue' ? 'text-primary' : 'text-secondary'">Redes Sociais</h4>
                    <div class="flex flex-col gap-2" :class="styleType === 'blue' ? 'text-white' : 'text-secondary'">
                        <a href="https://www.instagram.com/rmg.agro?igsh=OHluYjdhd3kyMTdk" target="_blank" class="flex items-center gap-2">
                            <IconInstagram :color="setIconStyle" />
                            <span>@rm.agro</span>
                        </a>
                        <!-- <a href="mailto:rodrigo@rmgroup.com.br" class="flex items-center gap-2">
                            <IconLinkedin :color="setIconStyle" />
                            <span>RM AGRO</span>
                        </a> -->
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-2 w-full justify-start xs:text-center md:items-end xs:mt-10 md:mt-0">
                <NuxtImg src="/logoWithWhite.png" v-if="styleType === 'blue'" class="w-[150px] xs:mx-auto md:mx-0"/>
                <NuxtImg src="/logoBlue.png" class="w-[150px] xs:mx-auto md:mx-0" v-else/>
                <span :class="styleType === 'blue' ? 'text-white' : 'text-secondary'">www.rmgroup.com.br</span>


                <p class="text-xs mt-20" :class="styleType === 'blue' ? 'text-white' : 'text-secondary'">© 2023 - {{ dateNow }} RM Group. Todos os direitos reservados.</p>
            </div>
        </Container>

    </footer>
</template>

<script setup lang="ts">
const { styleType } = withDefaults(defineProps<{
    styleType?: 'blue' | 'green'
}>(), {
   styleType: 'blue'
})

const setStyle = computed<string>(() => {
    if(styleType === 'blue') {
        return "bg-secondary border-primary bg-[url('/icon-blue.png')]"
    } else {
        return "bg-primary border-secondary bg-[url('/icon-green.png')]"
    }
})

const setIconStyle = computed<string>((): string => {
    if(styleType === 'blue') {
        return "fill-current text-white"
    } else {
        return "fill-current text-secondary"
    }
})


const dateNow = new Date().getFullYear()

</script>
