<template>
    <div class="w-full xs:h-dvh md:h-[525px] xs:bg-[url('/bg/about-bg-mobile.png')] md:bg-[url('/bg/about-bg.png')] bg-cover bg-center">
        <div class="banner-effect w-full h-full flex items-center">
            <Container class="w-full h-full flex flex-col gap-4 justify-center xs:pb-20 md:pb-0 mt-4">
                <h2 class="w-full max-w-[500px] text-primary xs:text-3xl md:text-4xl font-bold">Impulsionamos seu sucesso no mercado de commodities</h2>
                <p class="w-full max-w-[500px] text-white">
                    No mercado de commodities, o sucesso depende de tomar decisões assertivas em um ambiente complexo e dinâmico. A RM Agro é a sua parceira estratégica para navegar neste cenário com inteligência e segurança.
                </p>
            </Container>
        </div>
    </div>

    <Container class="py-20 flex flex-col gap-4">
        <div class="flex justify-between">
            <h3 class="text-3xl font-bold text-secondary">QUEM SOMOS?</h3>
            <div class="flex items-center gap-4">
                <!-- <NuxtLink >
                    <IconLinkedin color="fill-current text-secondary"/>
                </NuxtLink> -->
                <NuxtLink to="https://www.instagram.com/rmg.agro?igsh=OHluYjdhd3kyMTdk" target="_blank">
                    <IconInstagram color="fill-current text-secondary"/>
                </NuxtLink>
            </div>
        </div>

        <div class="flex flex-col gap-4 text-justify mt-8">
            <p>Na RM Agro, estamos comprometidos em disseminar e equilibrar o conhecimento de mercado, em setores do agronegócio. Fundada em setembro de 2023, por Rodrigo Novaes e Mateus Brizueña, nossa empresa surgiu da percepção de uma lacuna no mercado.</p>

            <p>Nosso objetivo principal é democratizar o conhecimento reduzindo os riscos e oferecendo soluções inovadoras por meio de uma equipe experiente e dedicada. Nosso diferencial está na abordagem híbrida de atendimento, combinando reuniões online e presenciais para garantir flexibilidade e conforto aos nossos clientes. Cada cliente recebe orientação personalizada, pois acreditamos que essa é a chave para mitigar os riscos em suas operações e alcançar o sucesso de forma assertiva.</p>

            <p>Ao acreditar na RM Agro, você experimentará uma parceria que vai além do fornecimento de direcionamento, proporcionamos um ambiente mais seguro para as empresas do setor.</p>
        </div>
    </Container>

    <div class="w-full bg-primary py-10 bg-[url('/icon-blue-inverted.png')] bg-no-repeat bg-contain bg-right">
        <Container class="flex flex-col gap-16">
            <div class="flex flex-col gap-4 w-full max-w-[780px] text-justify">
                <h5 class="text-2xl font-bold">MISSÃO</h5>
                <p>Proporcionar aos clientes do agronegócio um serviço personalizado e estruturado, baseado em informações e tendências de mercado, através de uma linguagem clara e objetiva, para a gestão de riscos e a implementação das melhores estratégias de decisão em seus negócios.</p>
            </div>

            <div class="flex flex-col gap-4 w-full max-w-[780px] text-justify">
                <h5 class="text-2xl font-bold">VISÃO</h5>
                <p>Ser reconhecida como a principal parceira estratégica das empresas do agronegócio, oferecendo soluções especializadas e inovadoras em gestão de riscos, trading e inteligência de mercado, contribuindo assim para o desenvolvimento sustentável do setor.</p>
            </div>

            <div class="flex flex-col gap-4 w-full max-w-[780px] text-justify">
                <h5 class="text-2xl font-bold">VALORES</h5>
                <p><span class="font-bold">Profissionalismo e Excelência: </span>Comprometimento com a entrega de serviços de alta qualidade, promovendo um ambiente de trabalho ético e transparente.</p>

                <p><span class="font-bold">Personalização e Especialização: </span>Dedicação em oferecer soluções personalizadas, baseadas no conhecimento técnico e na expertise de nossa equipe.</p>

                <p><span class="font-bold">Parceria e Colaboração: </span>Construção de relacionamentos sólidos e de longo prazo com nossos clientes, através de uma comunicação aberta e uma abordagem colaborativa.</p>

                <p><span class="font-bold">Inovação e Adaptabilidade: </span>Busca contínua por novas tecnologias e metodologias, adaptando-nos às mudanças do mercado para melhor atender às necessidades de nossos clientes.</p>

                <p><span class="font-bold">Responsabilidade Social e Ambiental: </span>Compromisso com práticas empresariais sustentáveis, visando o bem-estar e a preservação do meio ambiente.</p>
            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/store'

onMounted(() => {
    useLayoutStore().setFooterColor('blue')
})


</script>
