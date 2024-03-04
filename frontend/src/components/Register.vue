<script setup>
    import { ref } from 'vue';
    import { useUserStore } from '@/stores/user';

    const { register } = useUserStore();

    const name = ref('');
    const nameRules = [
        value => {
            return value.length > 0
        },
    ];

    const email = ref('');
    const emailRules = [
        value => {
            return value.length > 0
        },
    ];

    const password = ref('');
    const passwordRules = [
        value => {
            return value.length >= 6
        },
    ];
    async function submit (event) {
        await register(name.value, email.value, password.value);
    }
</script>
<template>
    <v-sheet width="300" class="mx-auto">
        <v-form fast-fail @submit.prevent="submit">
            <v-text-field
                v-model="name"
                label="name"
                :rules="nameRules"
            ></v-text-field>

            <v-text-field
                v-model="email"
                label="email"
                :rules="emailRules"
            ></v-text-field>

            <v-text-field
                v-model="password"
                label="password"
                :rules="passwordRules"
            ></v-text-field>

            <v-btn type="submit" block class="mt-2">Submit</v-btn>
        </v-form>
    </v-sheet>
</template>