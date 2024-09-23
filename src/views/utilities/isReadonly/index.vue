<template>
    <div>
      <h1>Readonly Example</h1>
      <p>Original Data: {{ originalData }}</p>
      <p>Readonly Data: {{ readonlyData }}</p>
      <p>Is Readonly: {{ isReadonly(readonlyData) }}</p>
    </div>
  </template>
  
  <script setup>
  import { reactive, readonly, isReadonly } from 'vue';
  
  // Create a reactive object
  const originalData = reactive({
    name: 'John Doe',
    age: 30
  });
  
  // Create a readonly version of the reactive object
  const readonlyData = readonly(originalData);
  </script>