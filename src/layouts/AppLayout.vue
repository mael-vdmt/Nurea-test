<template>
    <v-app class="app-background">

        <AppHeader />

        <v-main>
            <v-container fluid class="pa-4">
                <router-view></router-view>
            </v-container>
        </v-main>

        <AppFooter />

    </v-app>
</template>

<script setup>

import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

</script>


<style scoped>

.app-background {
    background-color: #f2ece4;
}

</style>