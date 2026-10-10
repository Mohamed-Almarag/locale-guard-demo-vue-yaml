<script setup lang="ts">
import { watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import ReminderSettings from './components/ReminderSettings.vue'
import TaskList from './components/TaskList.vue'
import { languages } from './i18n'

const { locale } = useI18n()

watchEffect(() => {
  const language = languages.find((item) => item.code === locale.value)
  document.documentElement.lang = locale.value
  document.documentElement.dir = language?.dir ?? 'ltr'
})
</script>

<template>
  <header>
    <strong>{{ $t('nav.board') }}</strong>
    <label>
      {{ $t('settings.language') }}
      <select v-model="locale">
        <option v-for="item in languages" :key="item.code" :value="item.code">
          {{ item.name }}
        </option>
      </select>
    </label>
  </header>
  <main>
    <TaskList />
    <ReminderSettings />
  </main>
</template>
