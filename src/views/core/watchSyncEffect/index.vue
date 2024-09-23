
<template>
    <div>
      <h2>Counter: {{ counter }}</h2>
      <button @click="increment">Increment</button>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { ref, watchSyncEffect } from 'vue';
  
  export default {
    setup() {
      const counter = ref(0);
      const error = ref('');
  
      // Synchronous effect to immediately handle the counter limit
      watchSyncEffect(() => {
        if (counter.value > 10) {
          error.value = 'Counter limit exceeded! Resetting to 10.';
          counter.value = 10; // Prevent the counter from going over 10 immediately
        } else {
          error.value = '';
        }
      });
  
      const increment = () => {
        counter.value += 1; // Increment counter
      };
  
      return {
        counter,
        increment,
        error
      };
    },
  };
  </script>
  







<!-- <template>
    <div>
      <h2>Counter: {{ counter }}</h2>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect, watchSyncEffect } from 'vue'; 
      const counter = ref(0);
  
      // watchEffect (Asynchronous)
      watchEffect(() => {
        console.log('watchEffect - Counter updated:', counter.value);
      });
  
      // watchSyncEffect (Synchronous)
      watchSyncEffect(() => { 
            console.log('watchSyncEffect - Counter updated:', counter.value) 
      });
  
      const increment = () => {
        counter.value += 1;
      }; 
  </script>  -->