<template>
        <div>
          title:<input v-model="title" placeholder="Enter page title" />
          <p>message: {{ message }}</p>
        </div>
      </template>
      
      <script setup>
      import { ref, watchEffect } from 'vue';  
          const title = ref('My Page');
          const message = ref('')
      
          // Using watchEffect to automatically update document title
          watchEffect(() => {
                message.value = title.value;
          });
      </script>
      