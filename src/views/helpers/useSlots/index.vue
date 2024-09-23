<template>
    <div>
      <h1>Parent Component</h1>
      <ChildComponent> 
        <template v-slot:header>
          <h2>This is the header slot content</h2>
        </template>
        
        <p>This is the default slot content</p>
        
        <template v-slot:footer>
          <h4>This is the footer slot content</h4>
        </template>
      </ChildComponent>
    </div>
  </template>
  
  <script setup>
  import ChildComponent from './ChildComponent.vue';
  </script>
  