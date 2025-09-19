import {defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', {
    state: () => {
        return {
            notifications: []
        }
    },

    actions: {
        
        addNotification(notification) {
            this.notifications.push({ ...notification, show: true });
        },
        
        removeNotification(index) {
            this.notifications.splice(index, 1);
        }
    }
})