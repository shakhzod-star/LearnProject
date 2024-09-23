
<template>
  <div>
    <h1>{{ message }}</h1>
     <p>  unref(1) : {{ unref(1) }}</p>
     <p> unref(ref(1)): {{ unref(ref(1)) }}</p>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script setup>
    import { ref, computed, unref } from 'vue'; 
    const defaultMessage = ref('Hello, Vue!');
    const customMessage = ref('Welcome to unref!');
    const isCustom = ref('sdads');

    const message = computed(() => {
      console.log(unref(defaultMessage))
      
      return unref(isCustom) ? unref(customMessage) : unref(defaultMessage);
    }); 
    const updateMessage = () => {
      isCustom.value = !isCustom.value; // Toggle between messages
    }; 
</script>
 