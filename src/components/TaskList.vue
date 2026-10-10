<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { tasks } from '../tasks'
import TaskFilters from './TaskFilters.vue'

const { d, t } = useI18n()
const filter = ref<'all' | 'active' | 'completed'>('all')
const remaining = computed(() => tasks.value.filter((task) => !task.done).length)
const visible = computed(() =>
  tasks.value.filter((task) =>
    filter.value === 'all' ? true : task.done === (filter.value === 'completed')
  )
)

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
    <TaskFilters v-model="filter" />
    <p v-if="tasks.length === 0">{{ $t('board.empty') }}</p>
    <ul>
      <li v-for="task in visible" :key="task.id">
        <strong>{{ task.title }}</strong>
        <span>{{ $t('board.due', { date: d(task.due) }) }}</span>
        <span>{{ $t('board.assigned', [task.assignee]) }}</span>
        <button type="button" @click="task.done = true">{{ $t('task.done') }}</button>
        <button type="button" @click="remove(task.id, task.title)">{{ $t('task.delete') }}</button>
      </li>
    </ul>
  </section>
</template>
