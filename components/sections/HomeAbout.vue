<template>
    <div class="bg-primary bg-[url('/icon-blue.png')] bg-no-repeat bg-contain xs:pb-8 md:pb-0">
        <Container class="grid xs:grid-cols-1 md:grid-cols-2">
            <div class="py-20 xs:w-full md:w-[80%] flex flex-col gap-8">
                <div class="">
                    <span class="text-sm text-white">{{ $t("QUEM SOMOS?") }}</span>
                    <h4 class=" text-secondary text-4xl font-bold">{{ $t("Transforme a incerteza em oportunidade com a nossa expertise") }}</h4>
                </div>

                <p class="font-light">
                    {{ $t("A RM Agro é uma empresa de consultoria especializada em gestão de riscos no agronegócio.") }}
                </p>

                <div>
                    <p class="font-bold text-secondary">{{ $t("Nossa missão é ajudar você a:") }}</p>
                    <ul class="flex flex-col gap-2 mt-4 font-light list-disc list-inside">
                        <li>{{ $t("Compreender a volatilidade do mercado e seus impactos.") }}</li>
                        <li>{{ $t("Identificar e avaliar os riscos que podem afetar seu negócio.") }}</li>
                        <li>{{ $t("Desenvolver e implementar estratégias eficazes para mitigar esses riscos.") }}</li>
                        <li>{{ $t("Tomar decisões mais assertivas e estratégicas para o seu negócio.") }}</li>
                    </ul>
                </div>

                <BaseButton class="xs:w-full md:w-[300px]" style-type="secondary" url="/about" text="CONHEÇA A RM AGRO" />
            </div>

            <div class="flex flex-col gap-8 xs:translate-y-0 md:-translate-y-[80px]">
                <CardHomeAbout v-for="card in cardsData" :key="card.title" :title="card.title" :icon="card.icon" :description="card.description" />
            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">

const cardsData = [
    {
        title: 'Expertise',
        icon: 'Expertise',
        description: 'Nossa equipe de especialistas altamente qualificados possui um conhecimento profundo e abrangente do mercado de commodities e dos desafios específicos do agronegócio.'
    },
    {
        title: 'Compromisso',
        icon: 'Commitment',
        description: 'Compromisso inabalável com o sucesso dos nossos parceiros, oferecemos um suporte completo para que você tome as melhores decisões e maximize os resultados do seu negócio.'
    },
    {
        title: 'Resultados Comprovados',
        icon: 'Results',
        description: 'Nossa expertise e compromisso se traduzem em resultados concretos para nossos clientes. Ajudamos voce cliente a reduzir seus riscos, aumentar sua rentabilidade e tomar decisões mais assertivas.'
    }
]

</script>

