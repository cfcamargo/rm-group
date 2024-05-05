<template>
    <div class="w-full xs:h-dvh md:h-[615px] md:bg-[url('/bg/biography-bg.png')] xs:bg-[url('/bg/biography-bg-mobile.png')] bg-bottom xs:bg-bottom md:bg-right bg-cover">
        <Container class="flex xs:items-start md:items-center xs:justify-center md:justify-start xs:pt-[200px] md:pt-0 h-full">
            <h4 class="text-4xl font-bold text-primary">{{ $t("BIOGRAFIA") }}</h4>
        </Container>
    </div>

    <div class="w-full py-20 bg-[url('/icon-blue-inverted.png')] bg-contain bg-right bg-no-repeat">
        <Container class="grid xs:grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div class="grid grid-cols-2 gap-4">
                <NuxtImg src="/bio-rodrigo.png" class="h-[524px] object-cover rounded-lg overflow-hidden shadow-md"/>
                <NuxtImg src="/bio-rodrigo1.png" class="h-[524px] object-cover rounded-lg overflow-hidden shadow-md"/>
            </div>

            <div class="flex flex-col gap-4 text-justify">
                <h4 class=" text-xl text-primary font-bold">Rodrigo Novaes</h4>

                <p>{{ $t("Conheça Rodrigo Novaes, o CO-fundador da RM Agro. Formado em Administração e especialista em logística, Rodrigo tem mais de duas décadas de experiência na cadeia agrícola brasileira. Nascido em Minas Gerais, Rodrigo mudou-se para Mato Grosso aos 16 anos e ingressou em uma renomada empresa multinacional aos 18, iniciando sua trajetória no agronegócio.") }}</p>

                <p>{{ $t("Desde então, sua vida foi marcada por diversos desafios, estando longe de sua família e atuando em todas as regiões do Brasil, do Norte ao Sul. Fortalecendo sua técnica sobre as especificidades de cada corredor logístico e aprimorando seu conhecimento sobre as diversas safras vividas no país, Rodrigo desenvolveu uma compreensão profunda do setor no agronegócio.") }}</p>

                <p>{{ $t("Todas essas experiências, aliadas a um forte desejo inovador, o inspiraram a sonhar em trazer estratégias ao mercado que tragam resultados na gestão operacional e na melhor leitura do setor. Seu objetivo é fixar o nome da RM Agro como a propulsora da mentalidade estratégica no transporte do agronegócio, moldando o futuro da logística agrícola no Brasil.") }}</p>
            </div>
        </Container>
    </div>

    <div class="w-full py-20 bg-[url('/icon-green.png')] bg-contain bg-no-repeat bg-secondary">
        <Container class="grid xs:grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div class="flex flex-col gap-4 text-white text-justify">
                <h4 class=" text-xl text-primary font-bold">Mateus Cabral</h4>

                <p>{{ $t("Conheça Mateus Brizueña, co-fundador da RM Agro. Técnico Agrícola e Engenheiro Agrônomo, possui mais de uma década de experiência em Gestão de Risco e operações comerciais de Soja, Milho, insumos agrícolas, biocombustíveis e derivados de petróleo. Iniciando sua trajetória profissional, foi de classificador de grãos a Trader de Commodities atuando ativamente na construção das mesas de derivativos e riscos em três grandes empresas com atuação a nível nacional e internacional.") }}</p>

                <p>{{ $t("Sua ligação com o agronegócio vem desde a infância, influenciado pela família que já tinha participações no setor. Para Mateus, o agronegócio não é apenas uma área de trabalho, mas sim um estilo de vida. Suas aspirações, seus relacionamentos e dedicação estão todos entrelaçados com o agronegócio.") }}</p>

                <p>{{ $t("Dentro da RM Agro, sua atuação vai além do executivo, com atuação direta na formulação de estratégias, mantendo proximidade aos clientes.") }}</p>

                <p>{{ $t("Fora do escritório, considera-se um homem simples que valoriza momentos de convívio com amigos. Para ele, construir relacionamentos sólidos é tão importante quanto qualquer transação comercial, e é isso que o motiva a seguir neste caminho do agronegócio.") }}</p>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
                <NuxtImg src="/bio-mateus1.png" class="h-[524px] object-cover rounded-lg overflow-hidden shadow-md"/>
                <NuxtImg src="/bio-mateus2.png" class="h-[524px] object-cover rounded-lg overflow-hidden shadow-md"/>
            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/store'

useHead({
    title: 'RM AGRO | Biografia',
})

onMounted(() => {
    useLayoutStore().setFooterColor('green')
})


</script>