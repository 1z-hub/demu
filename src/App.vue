<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
body{
      margin: 0px;
      padding: 0px;
    }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
