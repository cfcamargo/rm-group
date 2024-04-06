<template>
    <div class="w-full px-8 pt-4">
        <nav class="w-full bg-white h-20 border rounded-md shadow">
            <Container class="flex justify-between h-full items-center">
                <NuxtLink to="/" class="w-[180px]">
                    <Logo />
                </NuxtLink>

                <div class="flex gap-4">
                    <NuxtLink class="text-secondary font-bold hover:text-primary" to="/">Home</NuxtLink>
                    <NuxtLink class="text-secondary font-bold hover:text-primary" to="/services">Serviços</NuxtLink>
                    <NuxtLink class="text-secondary font-bold hover:text-primary" to="/about">Sobre</NuxtLink>
                    <NuxtLink class="text-secondary font-bold hover:text-primary" to="/biography">Biografia</NuxtLink>
                    <NuxtLink class="text-secondary font-bold hover:text-primary" to="/companies">Parceiros</NuxtLink>
                    <NuxtLink class="text-secondary font-bold hover:text-primary" to="/contact">Contato</NuxtLink>
                </div>

                <a href="#" class="px-8 py-2 rounded bg-primary text-secondary">Área do Cliente</a>
            </Container>
        </nav>
    </div>
</template>

<script setup lang="ts">

</script>