<template>
    <v-container>
        <v-text-field
            class="bg-white"
            variant="outlined"
            hide-details="auto"
            label="Search patient by name or medical number"
            @input="$emit('update-search', $event.target.value)"
        >
        </v-text-field>
    </v-container>
</template>
