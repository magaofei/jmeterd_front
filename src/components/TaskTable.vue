<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <el-table
    :data="tableData"
    stripe
    style="width: 100%">

    <el-table-column
      prop="name"
      label="任务状态"
      width="180">
    </el-table-column>
    
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>


    <el-table-column
      prop="name"
      label="线程数"
      width="180">
    </el-table-column>

    <el-table-column
      prop="name"
      label="执行时间"
      width="180">
    </el-table-column>

    <el-table-column
      prop="gmt_modified"
      label="修改日期"
      width="180">
    </el-table-column>

    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    

  </el-table>
    
  </div>
</template>

<script>
/**
  任务和任务结果可能是相同的数据格式
 */
export default {
  props: {
    msg: String
  },

  data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
