<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
}
html,
body {
  width: 100%;
  background: #10aeb5;
}

#app {
  width: 768px;
  margin: 0 auto;
}
</style>
