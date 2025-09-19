<template>
    <v-snackbar 
        v-for="(notification, index) in notifications"
        :key="index"
        v-model="notification.show"
        :timeout="5000"
        :color="notification.color"
        :multi-line="true"
        :transition="'slide-x-reverse-transition'"
        @update:model-value="closeNotification(index)"
    >
        <span class="text-h6 font-weight-bold">{{ notification.type }} alerte : {{ notification.patient.firstName }} {{ notification.patient.lastName }} {{ notification.vital }}</span>

        <template #actions>
            <v-btn icon @click="closeNotification(index)">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </template>
        
    </v-snackbar>
</template>

<script setup>

import { useNotificationStore } from '@/stores/notification'

import { ref } from 'vue';
import { storeToRefs } from 'pinia'

const notificationStore = useNotificationStore()
const { notifications } = storeToRefs(notificationStore)

const closeNotification = (index) => {
    notificationStore.removeNotification(index);
};

</script>