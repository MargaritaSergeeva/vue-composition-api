import { ref } from 'vue'

export const useAlert = () => {
  const alert = ref(false)

  // eslint-disable-next-line no-return-assign
  const toggle = () => alert.value = !alert.value
  // eslint-disable-next-line no-return-assign
  const close = () => alert.value = false

  return {
    alert,
    toggle,
    close
  }
}
