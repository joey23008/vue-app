<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import { client } from '@/composables/useApi';
import type { Room } from 'ApiDataTypes';

const props = defineProps<{
    id: number
}>();
const room: Ref<Room | null> = ref(null);

onMounted(async () => {
    const { data } = await client.get(`/rooms/${props.id}`);
    room.value = data
});
console.log('room', room.value);
</script>
<template>
    <h1>Room Detail</h1>
    <v-table>
        <tbody>
            <tr>
                <td>id</td>
                <td>{{ room?.id }}</td>
            </tr>
            <tr>
                <td>room name</td>
                <td>{{ room?.room_name }}</td>
            </tr>
            <tr>
                <td>room capacigy</td>
                <td>{{ room?.room_capacity }}</td>
            </tr>
            <tr>
                <td>room status</td>
                <td>{{ room?.room_status }}</td>
            </tr>
        </tbody>
  </v-table>
</template>