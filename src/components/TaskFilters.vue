<script setup lang="ts">
import { computed } from 'vue'
import { tasks } from '../tasks'

const filter = defineModel<'all' | 'active' | 'completed'>({ default: 'all' })
const completed = computed(() => tasks.value.filter((task) => task.done).length)

function clearCompleted() {
  tasks.value = tasks.value.filter((task) => !task.done)
}
</script>

<template>
  <div role="toolbar">
    <button
      v-for="name in ['all', 'active', 'completed'] as const"
      :key="name"
      type="button"
      :aria-pressed="filter === name"
      @click="filter = name"
    >
      {{ $t(`filters.${name}`) }}
    </button>
    <button v-if="completed > 0" type="button" @click="clearCompleted">
      {{ $t('filters.clear', { count: completed }) }}
    </button>
    <p v-if="filter === 'completed' && completed === 0">{{ $t('filters.none') }}</p>
    <small>{{ $t('filters.hint', ['F']) }}</small>
  </div>
</template>
