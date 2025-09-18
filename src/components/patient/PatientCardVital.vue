<template>
    <v-card
        class="flex-grow-1 pa-2"
        elevation="6"
        max-width="800"
        rounded="lg"
        :color="statusAlert"
        outlined
    >
        <v-card-item>
            <v-card-title class="text-center font-bold">
                {{ name }}
            </v-card-title>
        </v-card-item>

        <v-card-text 
            v-if="typeof currentValue === 'object'"
        >
            <div
                v-for="(value, key) in currentValue" :key="key"
                class="d-flex align-center justify-center text-center"
            >
                <span class="text-h5 font-weight-bold mr-1">{{ value}}</span> ({{ key }})
            </div>
        </v-card-text>
        <v-card-text v-else class="d-flex flex-column align-center justify-center text-center">
                <span class="text-h5 font-weight-bold">{{ currentValue }}</span>
        </v-card-text>
        
    </v-card>
</template>

<script setup>

import { useGetVitalStatus } from '@/composables/useGetVitalStatus.js'
import { useRealTimeVital } from '@/composables/useRealTimeVital.js'
import { computed } from 'vue'

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    values: {
        type: Array,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

const { currentValue } = useRealTimeVital(props.values)

const status = computed(() => {
    return useGetVitalStatus(props.name, currentValue.value, props.age)
})

const statusAlert = computed(() => {
    switch (status.value) {
        case "stable":
            return "success"
        case "watch":
            return "warning"
        case "critical":
            return "error"
    }
})

</script>
