import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTestStore = defineStore('test', () => {
  const value = ref(false)
  const computedValue = computed(() => value.value)
  const computedObject = computed(() => ({ value: value.value }))

  return {
    value,
    computedValue,
    computedObject
  }
})
