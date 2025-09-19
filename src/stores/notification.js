import {defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', {
    state: () => {
        return {
            notifications: []
        }
    },

    actions: {
        
        addNotification(notification) {
            this.notifications.push(notification)
            const id = notification.id

            setTimeout(() => {
                this.notifications = this.notifications.filter(notification => notification.id !== id)
            }, 3000)
        },
    }
})