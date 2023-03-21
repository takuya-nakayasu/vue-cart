<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getProducts } from '../api/shop'

const products = ref([])
onMounted(() => {
    getProducts((data: any) => (products.value = data))
})
</script>

<template></template>