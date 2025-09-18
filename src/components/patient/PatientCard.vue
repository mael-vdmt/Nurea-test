<template>
    <v-container>
        <v-card
            class="mx-auto my-2"
            elevation="4"
            max-width="800"
            rounded="lg"
        >
            <v-card-item>
                <v-card-title>
                    {{ patient.firstName }} {{ patient.lastName }} - <span class="font-weight-bold	">{{ patient. medicalRecordNumber}}</span> ({{patient.age}} ans)
                </v-card-title>
            </v-card-item>

            <v-card-text>
                <v-row>
                    <v-col
                        v-for="(values, name) in patient.vitals" 
                        :key="name"
                        class="d-flex"
                        cols="12"
                        md="6"
                    >
                        <PatientCardVital 
                            :name="name"
                            :values="values"
                        />
                    </v-col>
                </v-row>
            </v-card-text>

        </v-card>
    </v-container>
</template>

<script setup>

import PatientCardVital from '@/components/patient/PatientCardVital.vue'

const props = defineProps({
    patient: {
        type: Object,
        required: true
    }
})

</script>
