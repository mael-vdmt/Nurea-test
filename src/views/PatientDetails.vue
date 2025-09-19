<template>
    <v-container>
        <NotificationBanner />

        <v-row class="d-flex align-center justify-end">
            <v-col cols="auto">
                <v-container class="pb-0">
                    <v-btn
                        color="primary"
                        @click="redirectToDashboard"
                    >
                        Return to Dashboard
                    </v-btn>
                </v-container>
            </v-col>
        </v-row>

        <v-row v-if="selectedPatient">
            <v-col
                cols="12"
                md="8"
            >
                <v-row class="d-flex justify-center align-center">
                    <v-col
                        v-for="(values, title) in selectedPatient.vitals" 
                        :key="selectedPatient.id + '-' + title"
                        class="d-flex"
                        cols="12"
                        lg="6"
                    >
                        <PatientGraphVital 
                            :title="title"
                            :values="values"
                            :patient="selectedPatient"
                        />
                    </v-col>
                </v-row>
            </v-col>
            <v-col
                cols="12"
                md="4"
            >
                <PatientUpdateForm 
                    :patient="selectedPatient"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

import NotificationBanner from '@/components/notification/NotificationBanner.vue'
import PatientGraphVital from '@/components/patient/PatientGraphVital.vue'
import PatientUpdateForm from '@/components/patient/PatientUpdateForm.vue'

import { usePatientStore } from '@/stores/patient'

import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const selectedPatient = ref(null)
const patientStore = usePatientStore()
const route = useRoute()

onMounted(() => {
    selectedPatient.value = patientStore.fetchPatientById(Number(route.params.id))
})

const router = useRouter()

function redirectToDashboard() {
    router.push({name: 'Dashboard'})
}

</script>
