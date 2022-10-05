<template>
  <div class="card">
    <p>Название: <strong>{{ name }}</strong></p>
    <p>Версия: <strong>{{ version }} ({{ doubleVersion }})</strong></p>
    <p>{{ injectProp }}</p>

    <button class="btn warning" @click="changeV()">Вернуть версию</button>
  </div>
</template>

<script>
import { computed, inject } from 'vue'

export default {
  props: ['name', 'version'],
  setup (props, context) {
    const doubleVersion = computed(() => props.version * 2)
    const changeV = () => {
      context.emit('change-version', 3)
    }
    return {
      injectProp: inject('injectProp'),
      doubleVersion,
      changeV
    }
  }
}
</script>
