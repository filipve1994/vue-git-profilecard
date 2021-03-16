<template>
  <div id="nav" class="">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/homeapp1">HomeApp1</router-link>
  </div>
  <div class="layout">
    <router-view />
  </div>
</template>

<style lang="scss">
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.layout {
  z-index: 6;
}

@keyframes hue {
  from {
    filter: hue-rotate(0);
  }
  to {
    filter: hue-rotate(360deg);
  }
}

body {
  @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&display=swap");
  font-family: "Fira Code", monospace;
}

#app {
  height: 100vh;
}

//#app {
//  font-family: Avenir, Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
//  color: #2c3e50;
//}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
