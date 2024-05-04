<template>
    <div class="w-full py-20 bg-white">
        <Container class="xs:hidden md:grid xs:grid-cols-1 md:grid-cols-2 xs:gap-10 md:gap-20 h-[750px]">
            <div class="flex flex-col gap-8">
                <div>
                    <span>{{ $t("SERVIÇOS") }}</span>
                    <h4 class="text-3xl font-bold text-primary">{{ $t("O QUE FAZEMOS?") }}</h4>
                </div>

                <div class="xs:hidden md:block">
                    <div class="grid grid-cols-3">
                        <button class="flex items-center gap-2 justify-center" @click="selectService('consulting')">
                            <IconAcessory :fillColor="seriveSelected === 'consulting' ? '#00BC4C' : '#002132'"/>
                            <span :class="seriveSelected === 'consulting' ? 'text-primary font-bold' : 'text-secondary'" >{{ $t("Consultoria") }}</span>
                        </button>
                        <button class="flex items-center gap-2 justify-center"  @click="selectService('monitoring')">
                            <IconReports :fillColor="seriveSelected === 'monitoring' ? '#00BC4C' : '#002132'"/>
                            <span :class="seriveSelected === 'monitoring' ? 'text-primary font-bold' : 'text-secondary'">{{ $t("Relatórios") }}</span>
                        </button>
                        <button class="flex items-center gap-2 justify-center"  @click="selectService('training')">
                            <IconTraining :fillColor="seriveSelected === 'training' ? '#00BC4C' : '#002132'"/>
                            <span :class="seriveSelected === 'training' ? 'text-primary font-bold' : 'text-secondary'">{{ $t("Treinamentos") }}</span>
                        </button>
                    </div>
                    <div class="h-5 flex items-center">
                        <div class="relative h-1 w-full bg-zinc-200">
                            <div class="w-1/3 h-2 bg-primary -mt-0.5 absolute transition-all ease-in-out" :class="changeServiceLineColor">

                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex-1 flex flex-col mt-10 gap-8 items-start">
                    <h4 class="text-2xl font-bold text-primary">{{ $t(serviceList[seriveSelected].title) }}</h4>
                    <p class="text-secondary text-justify">{{ $t(serviceList[seriveSelected].content) }}</p>
                    <span class="text-secondary">{{ $t(serviceList[seriveSelected].action) }}</span>

                    <BaseButton class="xs:w-full md:w-auto" text="Saiba mais" url="/services"/>
                </div>
            </div>

            <div class="xs:p-12 md:p-20">
                <div class="relative">
                    <NuxtImg :src="serviceList[seriveSelected].images[0]" alt="" class="w-full"/>
                    <NuxtImg :src="serviceList[seriveSelected].images[1]" alt="" class="absolute z-30 top-0 left-0 -translate-x-1/2 -translate-y-1/2"/>
                    <NuxtImg :src="serviceList[seriveSelected].images[2]" alt="" class="absolute z-30 bottom-0 right-0 translate-x-1/2 translate-y-1/2"/>
                </div>
            </div>
        </Container>

        <Container class="xs:flex flex-col md:hidden">
            <div class="flex flex-col gap-10">
                <div>
                    <span>{{ $t("SERVIÇOS") }}</span>
                    <h4 class="text-3xl font-bold text-primary">{{ $t("O QUE FAZEMOS?") }}</h4>
                </div>

                <div class="flex flex-col-reverse gap-8" v-for="service in serviceList" :key="service.title">
                    <div class="flex flex-col gap-8 items-start">
                        <h4 class="text-2xl font-bold text-primary">{{ $t(service.title) }}</h4>
                        <p class="text-secondary text-justify">{{ $t(service.content) }}</p>
                        <span class="text-secondary">{{ $t(service.action) }}</span>

                        <BaseButton class="xs:w-full md:w-auto" text="Saiba mais" url="/services"/>
                    </div>

                    <div class="relative">
                        <NuxtImg :src="service.images[0]" alt="" class="w-full"/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">

const seriveSelected = ref<'consulting' | 'training' | 'monitoring'>('consulting')

const serviceList = {
    consulting: {
        title: 'Estruturação de Operações de Trading e Gestão de Risco',
        content: 'Nosso compromisso é oferecer aos nossos clientes toda a orientação necessária para executar e controlar suas operações de gestão de riscos e trading. Utilizamos estratégias inteligentes, incluindo contratos futuros e de opções, nas bolsas mais importantes, como B3, CBOT, ICE e NYMEX. Estamos aqui para ajudá-lo a ampliar a lucratividade e proteger as margens em suas operações no mercado físico. Sua segurança e sucesso são nossa prioridade máxima.',
        action: 'Conheca mais sobre nossa consultoria',
        images: ['/services/home-service1.png', '/services/home-service2.png', '/services/home-service3.png']
    },
    monitoring: {
        title: 'Inteligência de Mercado',
        content: 'A Inteligência de Mercado da RM Agro é como ter um guia especializado para o agronegócio. Nossa equipe se dedica a analisar as tendências do mercado, fornecendo insights valiosos e estratégicos para nossos clientes. Com esse recurso, você poderá tomar decisões importantes, aproveitando as oportunidades e enfrentando os desafios com mais clareza. Conte conosco para ser sua parceira na jornada de crescimento e sucesso.',
        action: 'Conheca mais sobre nossos insights',
        images: ['/services/home-report1.png', '/services/home-report2.png', '/services/home-report3.png']
    },
    training: {
        title: 'Treinamentos',
        content: 'Oferecemos aos nossos clientes uma jornada de descoberta e crescimento para capacitá-lo no mundo do agronegócio. Com uma equipe experiente e capacitada, estamos aqui para oferecer não apenas conhecimento, mas também apoio e inspiração ao longo do caminho para atuação no setor.',
        action: 'Conheca mais sobre nossos treinamentos',
        images: ['/services/home-training1.png', '/services/home-training2.png', '/services/home-training3.png']
    }
}

const changeServiceLineColor = computed(() => {
    if(seriveSelected.value === 'consulting') {
        return 'left-0'
    }
    if(seriveSelected.value === 'monitoring') {
        return 'left-1/3'
    }
    if(seriveSelected.value === 'training') {
        return 'left-2/3'
    }
})

const selectService = (service:'consulting' | 'training' | 'monitoring') => {
    seriveSelected.value = service
}

</script>