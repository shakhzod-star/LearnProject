<template>
    <div>
      <h2>Child Component</h2>
      <!-- Forwarding all attributes to the input element -->
      <input v-bind="attrs" />
      {{ attrs }}
    </div>
  </template>
  
  <script>
  import { useAttrs } from 'vue';
  
  export default {
    setup() {
      // useAttrs provides an object with all the attributes that weren't declared as props
      const attrs = useAttrs();
  
      return {
        attrs,
      };
    },
  };
  </script>
  