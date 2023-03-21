import { getProducts } from "@/api/shop";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useStoreProducts = defineStore('products', () => {
    const products = ref([])

    const getProductList = () => {
        getProducts((products: any) => (this.products = products))
    }
    return { products, getProductList }
})