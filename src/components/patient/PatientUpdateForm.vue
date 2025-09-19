<template>
    <v-container>
        <v-card>
            <v-form 
                @submit.prevent="submit"
                class="pa-4"
            >

                <v-text-field
                    v-model="patientDatas.firstName"
                    :rules="firstNameRules"
                    label="First name"
                ></v-text-field>

                <v-text-field
                    v-model="patientDatas.lastName"
                    :rules="lastNameRules"
                    label="Last name"
                ></v-text-field>

                <v-number-input
                    v-model="patientDatas.age"
                    :rules="ageRules"
                    label="Age"
                ></v-number-input>

                <v-alert
                    v-if="showAlert"
                    :type="alertType"
                >
                    {{ alertMessage }}
                </v-alert>

                <v-row class="d-flex justify-center mt-4 mb-2">
                    <v-btn type="submit">Update</v-btn>
                </v-row>


            </v-form>
        </v-card>
    </v-container>
</template>

<script setup>

import { usePatientStore } from '@/stores/patient'

import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
    patient: {
        type: Object,
        required: true
    }
})

const patientDatas = reactive({...props.patient})

const firstNameRules = ref([
    v => !!v || 'First name is required',
])

const lastNameRules = ref([
    v => !!v || 'Last name is required',
])

const ageRules = ref([
    v => !!v || 'Age is required',
])

const patientStore = usePatientStore()
const route = useRoute()

const alertMessage = ref('')
const alertType = ref('')
const showAlert = ref(false)

function submit() {
    if( patientDatas.firstName != props.patient.firstName ||
        patientDatas.lastName != props.patient.lastName ||
        patientDatas.age != props.patient.age
    ) {
        patientStore.updatePatient(Number(route.params.id), patientDatas)
        alertMessage.value = 'Patient has been successfully updated'
        alertType.value = 'success'
    } else {
        alertMessage.value = 'No changes detected, please modify fields to update'
        alertType.value = 'warning'
    }
    showAlert.value = true
}

</script>
