<template>
    <div class="w-full max-w-[464px] bg-white p-10 rounded-lg shadow-lg">
        <div class="flex items-center justify-between">
            <span class="font-bold text-lg text-primary">{{ $t(title) }}</span>
            <component :is="icons[icon]" class="text-6xl text-primary" />
        </div>

        <p class="text-secondary text-justify">{{ $t(description) }}</p>
    </div>
</template>

<script setup lang="ts">
import IconExpertise from '@/components/icons/IconExpertise.vue'
import IconCommitment from '@/components/icons/IconCommitment.vue'
import IconResults from '@/components/icons/IconResults.vue'

const {title, icon, description} = defineProps<{
    title: string,
    icon: string
    description: string
}>()

const icons = {
    'Expertise': IconExpertise,
    'Commitment': IconCommitment,
    'Results': IconResults
}

</script>

