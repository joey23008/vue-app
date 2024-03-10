<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import { client } from '@/composables/useApi';
import type { Room } from 'ApiDataTypes';

const rooms: Ref<Room[]> = ref([]);

onMounted(async () => {
    const { data } = await client.get('/rooms');
    rooms.value = data || []
});
console.log('rooms', rooms.value);
</script>
<template>
    <h1>Rooms</h1>
    <v-list lines="one">
        <v-list-item
            v-for="room in rooms"
            :key="room.id"
        >
            <router-link :to="`/rooms/${room.id}`">
                {{room.room_name}}
            </router-link>
        </v-list-item>
    </v-list>
</template>