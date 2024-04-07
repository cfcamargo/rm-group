<template>
    <div class="w-full xs:h-dvh md:h-[545px] xs:bg-[url('/bg/service-bg-mobile.png')] md:bg-[url('/bg/service-bg.png')] bg-cover">
        <div class="banner-effect w-full h-full">
            <Container class="h-full flex gap-4 flex-col justify-center text-white">
                <h3 class="text-primary text-3xl font-bold">Maximize Suas Oportunidades</h3>
                <p class="w-full max-w-[550px] text-justify">Nosso foco é oferecer consultoria especializada no mercado de transportes, agrícola e de combustíveis, concentrando-nos na gestão de riscos e operações de trading. Queremos ajudá-lo a alcançar resultados ainda melhores e proteger suas margens. Descubra estratégias personalizadas para impulsionar a sua empresa.</p>
            </Container>
        </div>
    </div>

    <div class="w-full bg-primary xs:h-auto md:h-[520px] mt-[200px]">
        <Container class="flex xs:flex-col-reverse md:flex-row gap-10 items-center -translate-y-[100px]">
            <div class="xs:w-full md:w-1/3 flex flex-col gap-8">
                <h3 class="font-bold text-secondary text-2xl">
                    Consultoria Especializada
                </h3>

                <p class="text-secondary text-justify">Acreditamos que podemos transformar dados em decisões que realmente fazem a diferença.O principal objetivo da nossa consultoria, é ajudar nossos clientes a terem um desempenho excepcional no agronegócio, oferecendo insights assertivos. Fazemos isso  através de relatórios detalhados e  treinamentos personalizados, garantindo não apenas informações valiosas, mas também estratégias práticas para gerenciar riscos e maximizar margens em suas operações comerciais.</p>
            </div>

            <div class="xs:w-full md:w-2/3">
                <ServiceSlider :images="consultingImages"/>
            </div>
        </Container>
    </div>

    <div class="py-20">
        <Container class="grid xs:grid-cols-1 md:grid-cols-2 items-center gap-20">
            <div>
                <NuxtImg src="/service-gadgets.png"/>
            </div>

            <div class="flex flex-col gap-6">
                <h3 class="font-bold text-primary text-2xl">Informacão na palma da mão</h3>

                <p>A plataforma RM Agro é a sua central de inteligência para acompanhamento do mercado de commodities e moedas. </p>

                <p>Ela oferece acesso a notícias e informações atualizadas sobre cotações de mercado, dados climáticos, contratos futuros, fretes, fertilizantes, indicadores entre outros.</p>
 
                <BaseButton text="QUERO TER ACESSO" url="#" class="xs:w-full md:w-[270px]"/>
            </div>
        </Container>
    </div>

    <div class="w-full py-20 bg-primary bg-no-repeat bg-[url('/icon-blue.png')] bg-contain">
        <Container class="grid xs:grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div class="flex flex-col gap-8 text-secondary text-justify">
                <h3 class="font-bold text-2xl">Atualizações de Mercado</h3>
                <p>Contamos com uma equipe experiente com mais de uma década de experiência no agronegócio, dedicados a manter sua empresa atualizada das principais negociações do mercado de transporte, agrícola e de combustíveis. Aproveite nossa experiência para tomar decisões estratégicas, garantindo mais rentabilidade nas suas operações.</p>
            </div>

            <div class="flex items-center">
                <div class="w-[120px] rounded-md overflow-hidden h-[158px]">
                    <NuxtImg src="/atualizacao-mercado-2.png" class="h-full w-full object-cover"/>
                </div>

                <div class="w-[270px] rounded-2xl overflow-hidden h-[350px]">
                    <NuxtImg src="/atualizacao-mercado-1.png" class="w-full h-full object-cover"/>
                </div>

                <div class="w-[120px] rounded-md overflow-hidden h-[158px]">
                    <NuxtImg src="/atualizacao-mercado-3.png" class="h-full w-full object-cover"/>
                </div>
            </div>
        </Container>
    </div>


    <div class="py-20">
        <Container class="flex xs:flex-col-reverse md:flex-row gap-20 items-center">
            <div class="xs:w-full md:w-7/12">
                <ServiceSlider :images="trainingImages"/>
            </div>

            <div class="xs:w-full md:w-5/12 flex flex-col gap-8">
                <h3 class="font-bold text-secondary text-2xl">
                    Treinamentos Personalizados
                </h3>

                <p class="text-secondary text-justify">Realizamos treinamentos presenciais ou remotos, de acordo com as necessidades da sua empresa. Nosso objetivo é capacitar suas equipes, aprofundando o conhecimento no cenário do setor, incentivando decisões mais assertivas e estratégicas.</p>
            </div>
        </Container>
    </div>

    <div class="pt-20 grid xs:grid-cols-1 md:grid-cols-2 items-center">
        <div class="w-full bg-[url('/relatorio.png')] h-[500px] bg-cover">
            <div class="w-full h-full relatorio-effect">

            </div>
        </div>

        <div class="w-full h-full bg-secondary p-8 flex flex-col gap-6 justify-center">
            <h3 class="text-2xl font-bold text-primary">Relatórios Detalhados</h3>
            <p class="text-justify text-white w-full max-w-[500px]">Nossos relatórios são fundamentais para sua empresa, com insights valiosos e atualizações constantes do mercado. Cada relatório é feito de forma personalizada, com análises técnicas especializadas e as informações mais relevantes. Com o nosso relatório, você terá todos os dados necessários para tomar decisões estratégicas.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/store'

const consultingImages = [
    '/services/service-consulting1.png',
    '/services/service-consulting2.png',
    '/services/service-consulting3.png',
    '/services/service-consulting4.png',
]

const trainingImages = [
    '/services/service-training1.png',
    '/services/service-training2.png',
    '/services/service-training3.png',
    '/services/service-training4.png',
]

onMounted(() => {
    useLayoutStore().setFooterColor('green')
})

</script>

<style scoped>
.relatorio-effect{
    background: rgb(0,33,50);
    background: -moz-linear-gradient(274deg, rgba(0,33,50,1) 6%, rgba(0,33,50,0) 100%);
    background: -webkit-linear-gradient(274deg, rgba(0,33,50,1) 6%, rgba(0,33,50,0) 100%);
    background: linear-gradient(274deg, rgba(0,33,50,1) 6%, rgba(0,33,50,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#002132",endColorstr="#002132",GradientType=1);
}


@media screen and (max-width: 430px){
    .relatorio-effect-mobile{
        background: rgb(0,33,50);               
        background: -moz-linear-gradient(0deg, rgba(0,33,50,1) 6%, rgba(0,33,50,0) 100%);
        background: -webkit-linear-gradient(0deg, rgba(0,33,50,1) 6%, rgba(0,33,50,0) 100%);
        background: linear-gradient(0deg, rgba(0,33,50,1) 6%, rgba(0,33,50,0) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#002132",endColorstr="#002132",GradientType=1);   
    }
}
</style>