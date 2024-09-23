<template>
    <div>
      <p>{{ message }}</p>
      <button @click="toggleRefCheck">Check if 'message' is a ref</button>
      <p>{{ refStatus }}</p>
    </div>
  </template>
  
  <script>
  import { ref, isRef } from 'vue';
  
  export default {
    setup() {
      const message = ref("Hello, Vue 3!");
    //   const message = "Hello, Vue 3!";
      const refStatus = ref('');
  
      const toggleRefCheck = () => {
        // Checking if 'message' is a ref
        if (isRef(message)) {
          refStatus.value = "'message' is a ref!";
        } else {
          refStatus.value = "'message' is not a ref!";
        }
      };
  
      return {
        message,
        refStatus,
        toggleRefCheck
      };
    }
  };
  </script>
  