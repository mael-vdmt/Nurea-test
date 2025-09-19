<template>
    <v-container>
        <NotificationBanner />
        <v-row v-if="selectedPatient" class="d-flex justify-center align-center">
            <v-col
                v-for="(values, title) in selectedPatient.vitals" 
                :key="selectedPatient.id + '-' + title"
                class="d-flex"
                cols="12"
                md="6"
                lg="5"
            >
                <PatientGraphVital 
                    :title="title"
                    :values="values"
                    :patient="selectedPatient"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

import NotificationBanner from '@/components/notification/NotificationBanner.vue'
import PatientGraphVital from '@/components/patient/PatientGraphVital.vue'

import { usePatientStore } from '@/stores/patient'

import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const selectedPatient = ref(null)
const patientStore = usePatientStore()
const route = useRoute()

onMounted(() => {
    selectedPatient.value = patientStore.fetchPatientById(Number(route.params.id))
})

</script>
