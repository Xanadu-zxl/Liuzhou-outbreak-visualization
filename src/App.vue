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

html {
  font-size: 20px;
}

html,
body {
  width: 100%;
}

#app {
  max-width: 38rem;
  margin: 0 auto;
}
</style>
