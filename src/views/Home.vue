<template>
  <div id="haom">
    <el-container style="height:660px; border: 1px solid #eee;">
      <el-aside width="200px">
        <el-menu
          :default-openeds="['1', '2']"
          :default-active="zhw"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          :collapse="isCollapse"
          router
        >
        <div class="logo">
          <div class="log-i">
            <img src="../images/favicon.jpg" />
          </div>
          <div class="log-e">智学无忧教育</div>
        </div>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">在线测试</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                :index="item.url"
                @click="addTab(item.url,item.name)"
                v-for="(item,index) in ict"
                :key="index"
              >{{item.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">基础数据</span>
            </template>
             <el-menu-item-group>
              <el-menu-item
                :index="item.url"
                @click="addTab(item.url,item.name)"
                v-for="(item,index) in basic"
                :key="index"
              >{{item.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <div class="left">
            <div class="tu" @click="show">
              <i class="el-icon-caret-left"></i>
            </div>
          </div>
          <div class="centh">
            <el-tabs
                v-model="editableTabsValue"
                @tab-click="tabs(editableTabsValue)"
                type="card"
                closable
                @tab-remove="removeTab(editableTabsValue)"
              >
                <el-tab-pane
                  v-for="item in editableTabs"
                  :key="item.name"
                  :label="item.title"
                  :name="item.name"
                ></el-tab-pane>
              </el-tabs>
          </div>
          <div class="right">
            <i class="el-icon-s-custom"></i>
             <span>退出</span>
             <el-avatar :size="size" :src="circleUrl"></el-avatar>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editableTabsValue: "1", //路由路径
      circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      isCollapse: false,
      bool: false,
      zhw: "",
      editableTabs: [
        {
          title: "首页",
          name:'/'
        }
      ],
      ict: [
        { name: "老师出卷", url: "TestSetter" },
        { name: "学生管理", url: "TestPaperManage" },
        { name: "安排测试", url: "MakeTestPaper" },
        { name: "批阅试卷", url: "TestResult" }
      ],
      basic:[
        { name: "班级管理", url: "ClassManage" },
        { name: "试卷管理", url: "StudentManage" },
        { name: "老师管理", url: "TeacherManage" },
        { name: "修改密码", url: "ModifyPassword" }
      ],
      tabIndex: 2
    };
  },
  methods: {
    show() {
      if (this.isCollapse == false) {
        this.isCollapse = true;
        document.querySelectorAll("aside")[0].style.cssText="width:65px;"
      } else {
        this.isCollapse = false;
        document.querySelectorAll("aside")[0].style.cssText="width:200px;"
      }
    },
    tabs(y) {
      this.zhw = y;
      this.$router.push("/" + y);
    },
    addTab(url, uname) {
      this.editableTabsValue = url;
      for (var i = 0; i < this.editableTabs.length; i++) {
        if (this.editableTabs[i].title == uname) {
          console.log(i);
          return;
        }
      }
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: uname,
        name: url
      });
    },
    removeTab(targetName) {
      console.log(targetName)
      let tabs = this.editableTabs;
      let activeName = targetName;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
              this.$router.push("/" + activeName);
              this.zhw =activeName ;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  }
};
</script>

<style scoped lang="less">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  float: left;
  padding: 0px;
}

.el-aside {
  color: #333;
}
.centh{
  float: left;
  width: 80%;
}

.tu {
  float: left;
  width: 30px;
  height: 100%;
  background-color: #008181;
  i {
    margin-right: 10px;
    color: white;
    font-size: 18px;
  }
}
.left {
  float: left;
}

.logo {
  width: 100%;
  height: 60px;
  background-color: #ffea39;
  line-height: 60px;
  overflow: hidden;
}
.logo .log-i {
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 2px 2px 10px 2px #36a678;
  margin: 10px 10px 0px 10px;
}

.logo img {
  width: 100%;
  height: 100%;
}
.logo .log-e {
  float: left;
  font-weight: bold;
  color: #36a678;
}
</style>

