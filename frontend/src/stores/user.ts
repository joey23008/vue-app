import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import { client } from '@/composables/useApi'

import type { User } from '@/types/user'

export const useUserStore = defineStore('user', () => {

    const session: Ref<User | null> = ref(null);

    const login = async (email: string, password: string): Promise<void> => {
        const { data } = await client.post('/login', { email, password });
        if (data) {
            localStorage.setItem('userSession', data)
            setUserSession({
                user: data.user,
                authorisation: data.authorisation
            });
        }
    }

    const logout = async (): Promise<void> => {
        await client.post('/logout');
        localStorage.removeItem('userSession');
        setUserSession(null);
        router.push('/login');
    }

    const setUserSession = (data: User | any): void => {
        session.value = data;
    }

    const register = async (name: string, email: string, password: string): Promise<void> => {
        const { data } = await client.post('/register', { name, email, password });
        console.log('data', data)
        if (data) {
            setUserSession({
                user: data.user,
                authorisation: data.authorisation
            });
            router.push('/')
        }
    }

    return { session, register, login, logout, setUserSession }
})
