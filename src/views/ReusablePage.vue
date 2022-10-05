<template>
  <app-alert v-if="alert" title="Работаем с composable" type="primary" @close="close"></app-alert>
  <div class="card">
    <h2>Переиспользование</h2>

    <button class="btn primary" @click="toggle">Сообщение</button>
    <button class="btn" @click="goHome">На главную</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import AppAlert from '@/components/AppAlert'
import { useAlert } from '@/composable/alertComposable'

export default {
  setup () {
    const router = useRouter()
    const { alert, toggle, close } = useAlert()

    const goHome = () => {
      router.push('/')
    }

    return {
      alert,
      toggle,
      close,
      goHome
    }
  },
  components: {
    AppAlert
  }
}
</script>
