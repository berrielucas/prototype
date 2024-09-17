import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const theme = ref('light')
    return { theme }
  },
  { persist: true }
)
