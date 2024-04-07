<template>
    <div class="w-full h-[400px] bg-[url('/news-1.jpg')] bg-cover">
        <div class="w-full h-full banner-effect"> 
             <Container class="flex xs:justify-center md:justify-start items-center h-full">
                <h3 class="text-3xl text-primary font-bold">BLOG DE NOTICIAS</h3>
             </Container>
        </div>
    </div>


    <Container class="py-20 xs:grid-cols-1 grid md:grid-cols-2 items-center gap-10">
        <div class="flex flex-col gap-10">
            <p>A RM Agro é uma empresa pioneira na gestão de riscos no agronegócio. Prestando consultoria e treinamentos especializados, está revolucionando o setor com seu compromisso e profissionalismo nos segmentos de transporte, combustíveis e agrícolas.</p>

            <p>Nossa empresa vai além de simplesmente oferecer consultoria. Queremos ser verdadeiros parceiros de nossos clientes, ajudando-os a crescer de forma eficiente e sem riscos, afirma um dos fundadores da empresa.</p>

            <p>Com valores centrados na excelência, profissionalismo, ética, inovação e sustentabilidade, a R.M Agro busca não apenas liderar o mercado, mas também impactar positivamente o agronegócio.</p>
        </div>

        <div class="rounded-md overflow-hidden flex justify-center xs:mt-20 md:mt-0 shadow-md">
            <NuxtImg src="/news-1.jpg"/>
        </div>
    </Container>
</template>

<script setup lang="ts">

</script>
