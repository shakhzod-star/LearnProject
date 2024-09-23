<template>
    <div>
      <h1>Parent Component</h1>
      <input v-model="parentValue" placeholder="Edit me from parent"/>
      <Child v-model="parentValue" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Child from './Child.vue';
  
  const parentValue = ref('Hello from Parent!');
  </script>
  