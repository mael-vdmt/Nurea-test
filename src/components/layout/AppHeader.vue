<template>

    <v-app-bar color="primary">
        <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            variant="text"
            class="d-sm-none"
        >
            <v-icon color="black" icon="mdi-menu" />
        </v-app-bar-nav-icon>

        <v-toolbar-title text="Nurea Test"></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="d-none d-sm-flex">
            <v-btn to="/dashboard">Dashboard</v-btn>
            <v-btn to="/about">About</v-btn>
        </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer 
        v-model="drawer" 
        temporary
        color="white"
    >
        <v-list>
            <v-list-item to="/dashboard">
                <v-list-item-title title="Dashboard">
                    Dashboard
                </v-list-item-title>
            </v-list-item>
            <v-list-item to="/about">
                <v-list-item-title title="About">
                    About
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

</template>

<script setup>

import {ref} from 'vue';

const drawer = ref(false)

</script>
