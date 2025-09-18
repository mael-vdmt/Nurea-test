import {defineStore } from 'pinia'
import patientsData from '@/data/patients.json'

export const usePatientStore = defineStore('patient', {
    state: () => {
        return {
            patients: [],
            selectedPatient: null
        }
    },

    actions: {
        
        fetchAllPatients() {
            try {
                const response = patientsData
                if(!response || !response.patients) {
                    throw new Error('No patients found')
                }
                this.patients = response.patients
                return this.patients
            } catch(error) {
                console.error('Error fetching patients', error)
                throw error
            }
        }
    }
})