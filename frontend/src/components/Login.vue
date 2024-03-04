<script setup>
    import { ref } from 'vue';
    import { useUserStore } from '@/stores/user';
    import router from '@/router';

    const { login, session } = useUserStore();

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
        await login(email.value, password.value);
        router.push('/')
    }
</script>
<template>
    <v-sheet width="300" class="mx-auto">
        <v-form fast-fail @submit.prevent="submit">
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