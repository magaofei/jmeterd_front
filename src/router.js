import Vue from 'vue'
import Router from 'vue-router'
import TaskResult from './views/TaskResult.vue'
import Task from './views/Task.vue'
import TaskConfig from './views/TaskConfig.vue'

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
      path: '/TaskConfig',
      name: 'TaskConfig',
      component: TaskConfig
    }
  ]
})
