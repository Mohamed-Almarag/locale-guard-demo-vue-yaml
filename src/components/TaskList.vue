<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { tasks } from '../tasks'

const { d, t } = useI18n()
const remaining = computed(() => tasks.value.filter((task) => !task.done).length)

function remove(id: number, title: string) {
  if (confirm(t('task.confirm', { title }))) {
    tasks.value = tasks.value.filter((task) => task.id !== id)
  }
}
</script>

<template>
  <section>
    <h1>{{ $t('board.title') }}</h1>
    <p>{{ $t('board.remaining', remaining) }}</p>
    <p v-if="tasks.length === 0">{{ $t('board.empty') }}</p>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <strong>{{ task.title }}</strong>
        <span>{{ $t('board.due', { date: d(task.due) }) }}</span>
        <span>{{ $t('board.assigned', [task.assignee]) }}</span>
        <button type="button" @click="task.done = true">{{ $t('task.done') }}</button>
        <button type="button" @click="remove(task.id, task.title)">{{ $t('task.delete') }}</button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
ul {
  display: grid;
  gap: 0.75rem;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1rem;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
}
</style>
