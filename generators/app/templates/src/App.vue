<template>
  <div id="app">
    <shell-bar class="sticky top-0 left-0 right-0 z-50" />
    <fd-container fluid class="h-full pb-16">
      <router-view />
    </fd-container>
  </div>
</template>

<script>
import ShellBar from "@/components/ShellBar";

export default {
  name: "App",
  components: {
    ShellBar,
  },
};
</script>

<style lang="scss">
@import "./scss/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html,
body {
  height: 100%;
}
</style>
