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
  background: #D3DBE4 linear-gradient(to bottom, #23486B 0%, #23486B 12.48%, #23486B00 36.96%);
}

#app {
  max-width: 38rem;
  margin: 0 auto;
}
</style>
