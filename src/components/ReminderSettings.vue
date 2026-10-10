<script setup lang="ts">
import { ref } from 'vue'

const days = ref(1)
const enabled = ref(true)
</script>

<template>
  <section>
    <h2>{{ $t('reminders.title') }}</h2>
    <label v-if="enabled">
      <input v-model.number="days" type="range" min="0" max="7">
      {{ $t('reminders.before', days) }}
    </label>
    <button type="button" @click="enabled = !enabled">{{ $t('reminders.off') }}</button>
  </section>
</template>
