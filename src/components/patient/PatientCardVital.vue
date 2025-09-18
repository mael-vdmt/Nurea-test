<template>
    <v-card
        class="flex-grow-1 pa-1"
        elevation="4"
        max-width="800"
        rounded="lg"
    >
        <v-card-item>
            <v-card-title class="text-center">
                {{ name }}
            </v-card-title>
        </v-card-item>

        <v-card-text 
            v-if="typeof currentValue === 'object'"
        >
            <div
                v-for="(value, key) in currentValue" :key="key"
                class="d-flex flex-column align-center justify-center text-center"
            >
                {{ key }}: {{ value }}
            </div>
        </v-card-text>
        <v-card-text v-else class="d-flex flex-column align-center justify-center text-center">
                {{ currentValue }}
        </v-card-text>
    </v-card>
</template>

<script setup>

import { useRealTimeVital } from '@/composables/useRealTimeVital.js'

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    values: {
        type: Array,
        required: true
    }
})

const { currentValue } = useRealTimeVital(props.values)

</script>
