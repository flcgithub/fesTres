import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useStore = defineStore('main', () => {
  const count = ref(99)

  const doubleCount = computed(() => count.value * 2)

  const increment = () => {
    count.value++
  }

  return {
    count,
    doubleCount,
    increment
  }
  
})