<template>
  <div class="home">
    <TaskTable msg="任务列表"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskTable from '@/components/TaskTable.vue'

export default {
  name: 'home',
  components: {
    TaskTable
  }
}
</script>
