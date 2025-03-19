import { beforeEach, describe, expect, test } from 'vitest'
import { createPinia, setActivePinia, storeToRefs } from "pinia"
import { useTestStore } from "../stores/test"

describe('test', () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })
  
    test('computed bool', () => {
      const testStore = useTestStore()
      const { value, computedValue, computedObject } = storeToRefs(testStore)
      expect(testStore.value).toBe(false)
      expect(testStore.computedValue).toBe(false)
      expect(testStore.computedObject).toEqual({ value: false })
      expect(value.value).toBe(false)
      expect(computedValue.value).toBe(false)
      expect(computedObject.value).toEqual({ value: false })
  
      value.value = true
      expect(testStore.value).toBe(true)
      expect(testStore.computedValue).toBe(true)
      expect(testStore.computedObject).toEqual({ value: true })
      expect(value.value).toBe(true)
      // ❌ Both computed values are still false
      expect(computedValue.value).toBe(true)
      expect(computedObject.value).toEqual({ value: true })
    })
  })