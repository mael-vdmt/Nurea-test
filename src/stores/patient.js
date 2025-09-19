import {defineStore } from 'pinia'
import patientsData from '@/data/patients.json'

export const usePatientStore = defineStore('patient', {
    state: () => {
        return {
            patients: patientsData.patients,
            selectedPatient: null
        }
    },

    actions: {
        
        fetchPatientById(id) {
            try {
                const response = patientsData
                if(!response || !response.patients) {
                    throw new Error('No patients found')
                }
                this.selectedPatient = response.patients.find(patient => patient.id == id)
                return this.selectedPatient
            } catch(error) {
                console.error('Error fetching patient', error)
                throw error
            } 
        },

        updatePatient(id, datas) {
            try {
                const patientToUpdate = this.patients.find(patient => patient.id == id)
                
                if (patientToUpdate) {
                    patientToUpdate.firstName = datas.firstName
                    patientToUpdate.lastName = datas.lastName
                    patientToUpdate.age = datas.age
                }
            } catch(error) {
                console.error('Error updating patient', error)
                throw error
            }
        }
    }
})