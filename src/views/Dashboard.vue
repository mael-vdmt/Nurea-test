<template>
    <v-container>
        <PatientResearch 
            @update-search="handleSearch"
        />
        <v-row>
            <v-col
                v-for="(patient, index) in patientsListFiltered" 
                :key="index"
                cols="12"
                md="6"
                lg="4"
            >
                <PatientCard 
                    @click="redirectToPatientDetails(patient.id)"
                    :patient="patient"
                    class="cursor-pointer"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

import PatientCard from '@/components/patient/PatientCard.vue'
import PatientResearch from '@/components/patient/PatientResearch.vue'

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePatientStore } from '@/stores/patient'

const patientsList = ref([])
const patientsListFiltered = ref([])
const patientStore = usePatientStore()

onMounted(() => {
    patientsList.value = patientStore.fetchAllPatients()
    patientsListFiltered.value = patientsList.value
})

const handleSearch = (value) => {
    patientsListFiltered.value = patientsList.value.filter((patient) => {
        return (
            (patient.firstName + " " + patient.lastName).toLowerCase().includes(value.toLowerCase()) ||
            (patient.lastName + " " + patient.firstName).toLowerCase().includes(value.toLowerCase()) ||
            patient.medicalRecordNumber.toLowerCase().includes(value.toLowerCase())
        )
    })
}

const router = useRouter()

function redirectToPatientDetails(id) {
    router.push({name: 'Patient', params: {id}})
}

</script>
