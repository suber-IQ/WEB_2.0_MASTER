<script setup>
import HelloWorld from './components/HelloWorld.vue';
 const name = "Sumit Kumar";
</script>

<template>
  <div>
      <h1>Local Registration by {{ name }}</h1>
      <HelloWorld />
  </div>
</template>


<style scoped>
  h1{
      font-size: 1.5rem;
  }
</style>