<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getProducts } from '../api/shop'

const products: any = ref([])
onMounted(() => {
    getProducts((data: any) => (products.value = data))
})
</script>

<template>
    <ul>
        <li v-for="product in products" v-bind:key="product.id">
            {{ product.title }} - ¥{{ product.price.toLocaleString() }}
        </li>
    </ul>
</template>