import { ref } from 'vue'

export interface Task {
  id: number
  title: string
  due: Date
  assignee: string
  done: boolean
}

export const tasks = ref<Task[]>([
  { id: 1, title: 'Plan the sprint', due: new Date(2026, 9, 14), assignee: 'Sara', done: false },
  { id: 2, title: 'Review the design', due: new Date(2026, 9, 15), assignee: 'Omar', done: true },
  { id: 3, title: 'Ship the release', due: new Date(2026, 9, 20), assignee: 'Lena', done: false }
])
