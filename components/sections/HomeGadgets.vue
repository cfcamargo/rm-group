<template>
    <div class="w-full bg-secondary py-36 bg-[url('icon-green.png')] bg-contain bg-no-repeat">
        <Container class="grid xs:grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div class="w-full">
                <NuxtImg src="/gadgets-home.png" class="w-full"/>
            </div>

            <div class="flex flex-col gap-8">
                <h4 class="text-3xl text-primary font-bold">{{ $t("FIQUE POR DENTRO") }}</h4>

                <div class="flex flex-col gap-4 text-white">
                    <p>{{ $t("Acompanhe as últimas notícias e tendências do mercado em tempo real.") }}</p>
                    <p>{{ $t("Tenha acesso a dados sobre diversos indicadores do mercado como produção, consumo, estoques e preços.") }}</p>
                </div>

                <BaseButton class="xs:w-full md:w-[200px]" target="_blank" url="https://api.whatsapp.com/send?phone=5565999377184&text=Ola%20Gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20da%20RM%20AGRO" text="SAIBA MAIS"/>
            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">


</script>