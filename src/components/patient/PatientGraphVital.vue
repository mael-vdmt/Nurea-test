<template>
    <v-container>
         <v-card
            class="mx-auto text-center"
            color="secondary"
            max-width="500"
            dark
        >
            <v-card-text>
                <v-sheet
                    class="v-sheet--offset mx-auto"
                    color="primary"
                    elevation="12"
                    max-width="500"
                    rounded="lg"
                >
                    <PatientGraphVitalChart 
                        :title="title"
                        :values="values"
                        :patient="patient"
                    />
                    <v-row class="d-flex justify-end pt-4 pb-2 mr-3">
                        <div v-if="typeof currentValue === 'object'" class="d-flex">
                            <v-card 
                                v-for="(value, key) in currentValue" 
                                :key="key"
                                class="d-flex align-center justify-center text-center bg-white text-black rounded-lg px-3 ml-2"
                                :color="statusAlert"
                            >
                                <span class="text-h5 font-weight-bold mr-1">{{ value}}</span> ({{ key }})
                            </v-card >
                        </div>
                        <v-card 
                            v-else 
                            class="d-flex flex-column align-center justify-center text-center rounded-lg px-3" 
                            :color="statusAlert"
                        >
                            <span class="text-h5 font-weight-bold">{{ currentValue }}</span>
                        </v-card>
                    </v-row>
                </v-sheet>
            </v-card-text>
            <v-card-text >
                <div class="text-h5 font-weight-bold">
                    {{ titleFormat }} Last 24h
                </div>
            </v-card-text>
         </v-card>
    </v-container>
</template>

<script setup>

import PatientGraphVitalChart from '@/components/patient/PatientGraphVitalChart.vue'

import { useGetVitalStatus } from '@/composables/useGetVitalStatus.js'
import { useTitleFormat } from '@/composables/useTitleFormat.js'
import { useRealTimeVital } from '@/composables/useRealTimeVital.js'

import { useNotificationStore } from '@/stores/notification'

import { ref } from 'vue'
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

const titleFormat = computed(() => {
    return useTitleFormat(props.title)
})

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

</script>
