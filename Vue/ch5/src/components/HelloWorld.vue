<script setup>
import ByeWorld from './ByeWorld.vue';

 const msg = "Hello world!";
</script>

<template>
  <div>
      <h1>{{ msg }}</h1>
      <ByeWorld />
  </div>
</template>


<style scoped>
  h1{
      font-size: 1.5rem;
  }
</style>