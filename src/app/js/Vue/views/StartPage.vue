<template lang='pug'>
div This is start page component
button#quit-app-btn.border-2(@click='quit') quit
</template>

<script setup>
const { ipcRenderer } = require('electron')

const quit = () => {
  ipcRenderer.send('quit-app-request');
}
</script>

<style lang='sass'>

</style>