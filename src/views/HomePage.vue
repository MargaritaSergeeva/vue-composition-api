<template>
  <app-alert v-if="alert" title="Работаем с composable" type="danger" @close="close"></app-alert>
  <div class="card">
    <h1>Vue Composition Api</h1>
    <hr>
    <framework-info :name="name" :version="version" @change-version="changeVersion"></framework-info>
    <div class="form-control">
      <input type="text" ref="textInput" v-model.trim="inputModel">
    </div>

    <button class="btn" @click="change">Изменить</button>
    <button class="btn primary" @click="toggle">Сообщение</button>
  </div>
</template>

<script>
import { ref, watch, provide, onMounted } from 'vue'
import FrameworkInfo from '@/components/FrameworkInfo'
import AppAlert from '@/components/AppAlert'
import { useAlert } from '@/composable/alertComposable'

export default {
  setup () {
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref()
    const inputModel = ref('')
    const provideProp = ref('injectProp')
    const { alert, toggle, close } = useAlert()
    watch([version, name, inputModel], (newValues, oldValues) => {
      console.log('newVersion', newValues[0])
      console.log('oldVersion', oldValues[0])
      console.log('newName', newValues[1])
      console.log('oldName', oldValues[1])
      console.log('newInput', newValues[2])
    })
    const change = () => {
      name.value = 'Vue JS!'
      version.value = 4
      console.log(textInput.value.value)
    }
    const changeVersion = (num) => {
      version.value = num
    }
    onMounted(() => {
      name.value = 'Framework VueJS'
    })
    provide('injectProp', provideProp)

    return {
      name,
      version,
      textInput,
      inputModel,
      change,
      changeVersion,
      alert,
      toggle,
      close
    }
  },
  components: {
    FrameworkInfo,
    AppAlert
  }
}
</script>
