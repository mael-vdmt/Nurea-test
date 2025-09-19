<template>
    <v-alert 
        v-for="(notification, index) in notifications"
        :key="index"
        color="error"
        icon="mdi-alert"
        class="mb-2"
    >
        {{ notification.type }} alerte : {{ notification.patient.firstName }} {{ notification.patient.lastName }} {{ notification.vital }}
    </v-alert>
</template>

<script setup>

import { useNotificationStore } from '@/stores/notification'

import { storeToRefs } from 'pinia'

const notificationStore = useNotificationStore()
const { notifications } = storeToRefs(notificationStore)

</script>