<template>
    <v-container>
        <v-card
            class="my-2"
            elevation="4"
            max-width="800"
            rounded="lg"
            link
        >
            <v-card-item>
                <v-card-title class="py-1">
                    {{ patient.firstName }} {{ patient.lastName }} - <span class="font-weight-bold	">{{ patient. medicalRecordNumber}}</span> ({{patient.age}} ans)
                </v-card-title>
                <v-divider></v-divider>
            </v-card-item>

            <v-card-text>
                <v-row>
                    <v-col
                        v-for="(values, name) in patient.vitals" 
                        :key="patient.id + '-' + name"
                        class="d-flex"
                        cols="12"
                        md="6"
                    >
                        <PatientCardVital 
                            :name="name"
                            :values="values"
                            :age="patient.age"
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
