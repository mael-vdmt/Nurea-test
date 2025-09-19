<template>
    <v-card
        class="flex-grow-1 pa-2"
        elevation="6"
        max-width="800"
        rounded="lg"
        color="primary"
        outlined
    >
        <v-card-item>
            <v-card-title class="text-center font-bold">
                {{ titleFormat }}
            </v-card-title>
        </v-card-item>

        <v-card-text 
            v-if="typeof currentValue === 'object'"
        >
            <v-card
                v-for="(value, key) in currentValue" :key="key"
                class="d-flex align-center justify-center text-center rounded-lg px-3 mb-2"
                :color="statusAlert"
            >
                <span class="text-h5 font-weight-bold mr-1">{{ value}}</span> ({{ key }})
            </v-card>
        </v-card-text>
        <v-card-text v-else class="d-flex flex-column align-center justify-center text-center">
            <v-card
                class="rounded-lg px-3" 
                :color="statusAlert"
            >
                <span class="text-h5 font-weight-bold">{{ currentValue }}</span>
            </v-card>
        </v-card-text>
        
    </v-card>
</template>

<script setup>

import { useGetVitalStatus } from '@/composables/useGetVitalStatus.js'
import { useRealTimeVital } from '@/composables/useRealTimeVital.js'
import { useTitleFormat } from '@/composables/useTitleFormat.js'

import { useNotificationStore } from '@/stores/notification'

import { computed, watch } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    values: {
        type: Array,
        required: true
    },
    patient: {
        type: Object,
        required: true
    }
})

const { currentValue } = useRealTimeVital(props.values)

const status = computed(() => {
    return useGetVitalStatus(props.title, currentValue.value, props.patient.age)
})

const notificationStore = useNotificationStore()

watch(status, (newValue) => {
    if(newValue == "critical") {
        notificationStore.addNotification({
            patient: props.patient,
            vital: titleFormat,
            type: "critical",
            id: Date.now()
        })
    }
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

const titleFormat = computed(() => {
    return useTitleFormat(props.title)
})

</script>
