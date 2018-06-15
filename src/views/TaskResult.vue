<template>
  <div class="about">
    <h1>This is an about page</h1>
    <task-table></task-table>
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
