<template>
    <div class="notFound">notFound 404
        <button @click="back">back</button>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const back = () => router.go(-1)
</script>
<style lang="less" scoped>
</style>
