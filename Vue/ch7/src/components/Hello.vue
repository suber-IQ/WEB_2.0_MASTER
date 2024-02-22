<!-- Text Interpolation -->
<script setup>
   const msg = "Learn Vue Js by Suber-IQ";
   const num = 10;
   const on = false;
   function display(){
      alert("Hello from Display");
   }
</script>

<template>
   <h1>Hello world</h1>
   <h1>{{ msg }}</h1>  
   <h2>{{ 10 + 10 }}</h2>
   <h2>{{ num + 20 }}</h2>
   {{ display() }}
   <h2>{{ on ? "Dark" : "Light" }}</h2>

   <!-- not working -->
   <!-- {{ var a = 10 }} -->
</template>

<style scoped>
</style>