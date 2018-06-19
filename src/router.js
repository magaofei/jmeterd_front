import Vue from 'vue'
import Router from 'vue-router'
import TaskResult from './views/TaskResult.vue'
import Task from './views/Task.vue'
import TaskConfig from './views/TaskConfig.vue'
import Machine from './views/Machine.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/task'
    },
    {
      path: '/task',
      name: 'task',
      component: Task
    },
    {
      path: '/taskResult',
      name: 'taskResult',
      component: TaskResult
    },
    {
      path: '/taskConfig',
      name: 'TaskConfig',
      component: TaskConfig
    },
    {
      path: '/machine',
      name: 'Machine',
      component: Machine
    }
  ]
})
