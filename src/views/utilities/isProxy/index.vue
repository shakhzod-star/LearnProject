<template>
    <div>
      <p>{{ message }}</p>
      <p>Is message reactive? {{ isMessageProxy }}</p> 
      proxy reactivities: reactive(), readonly(), shallowReactive() or shallowReadonly().
    </div>
  </template>
  
  <script setup>
  import {reactive, isProxy } from 'vue'; 
      // Creating a reactive object
      const state = reactive({
        message: 'Hello, Vue 3!'
      }); 
      // Checking if the object is a proxy
      const isMessageProxy = isProxy(state);
  </script>
  