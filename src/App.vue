<template>


  <div id="app">

    <el-container>
      <el-header>

        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">任务中心</el-menu-item>
          <el-menu-item index="2">退出登录</el-menu-item>
        </el-menu>


      </el-header>
      <el-container>
        <el-aside width="200px">

            <!-- <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">

              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu> -->

          <div id="nav">
            <ul>
              <li><router-link to="/task">任务</router-link></li>
              <li><router-link to="/taskResult">任务结果</router-link></li>
              <li><router-link to="/taskConfig">任务配置</router-link></li>
            </ul>
            
          </div>

        </el-aside>
        <el-main>
          <div id="main">
            <router-view/>
          </div>
        </el-main>
      </el-container>
    </el-container>



    
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

/* #nav {
  width: 12%;
  float: left;
  position: fixed;
}


#main {
  width: 88%;
  float: right;
}
*/

#nav li {
  list-style-type: none;
  line-height: 56px;
  
}
</style>
