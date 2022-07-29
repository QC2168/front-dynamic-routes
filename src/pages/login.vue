<template>
    <div class="login">
        <input v-model="form.account" type="text">
        <input v-model="form.password" type="text">
        <button @click="login">login</button>
    </div>
</template>
<script setup lang="ts">import { reactive } from 'vue';
import axios from '../network/index'
import useUser from '../store/user'
import pinia from '../store'
import { useRouter } from 'vue-router'
import { initRoute } from '../router';
const router = useRouter()
const user = useUser(pinia)
const form = reactive({
    account: 'admin',
    password: '123456',
})
const login = async () => {
    const { data, status } = await axios.post('login', { ...form })

    if (status === 200) {
        // await user.setUserInfo(data)
        localStorage.setItem('role',data.role)
        await initRoute()
        router.push('/home')
    }

}
</script>
<style lang="less" scoped>
</style>
