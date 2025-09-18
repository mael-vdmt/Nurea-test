<template>
    <v-container>
        <v-row>
            <v-col
                v-for="(patient, index) in patientsList" 
                :key="index"
            >
                <PatientCard 
                    @click="redirectToPatientDetails(patient.id)"
                    :patient="patient"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

import PatientCard from '@/components/patient/PatientCard.vue'

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePatientStore } from '@/stores/patient'

const patientsList = ref([])
const patientStore = usePatientStore()

onMounted(() => {
    patientsList.value = patientStore.fetchAllPatients();
})

const router = useRouter()

function redirectToPatientDetails(id) {
    router.push({name: 'Patient', params: {id}})
}

</script>
