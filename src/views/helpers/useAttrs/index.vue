<template>
    <div>
      <h1>Parent Component</h1>
      <!-- Passing attributes like id, class, and placeholder to the child component -->
      <ChildComponent id="my-input" class="custom-class" placeholder="Enter your name" />
    </div>
  </template>
  
  <script setup>
  import ChildComponent from './ChildComponent.vue';
  </script>
  