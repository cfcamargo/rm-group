<template>
    <div class="w-full px-8 pt-4">
        <nav class="w-full bg-white h-20 border rounded-md shadow">
            <Container class="flex justify-between h-full items-center">
                <NuxtLink to="/" class="w-[180px]">
                    <Logo />
                </NuxtLink>

                <div class="flex gap-4">
                    <NuxtLink to="/" class="text-secondary font-bold hover:text-primary">Home</NuxtLink>
                    <NuxtLink to="/services" class="text-secondary font-bold hover:text-primary">Serviços</NuxtLink>
                    <NuxtLink to="/about" class="text-secondary font-bold hover:text-primary">Sobre</NuxtLink>
                    <NuxtLink to="/biography" class="text-secondary font-bold hover:text-primary">Biografia</NuxtLink>
                    <NuxtLink to="/companies" class="text-secondary font-bold hover:text-primary">Parceiros</NuxtLink>
                    <NuxtLink to="/contact" class="text-secondary font-bold hover:text-primary">Contato</NuxtLink>
                </div>

                <a href="#" class="px-8 py-2 rounded bg-primary text-secondary">Área do Cliente</a>
            </Container>
        </nav>
    </div>
</template>

<script setup lang="ts">

</script>