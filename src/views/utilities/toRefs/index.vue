<template>
    <div>
      <h2>User Information</h2>
      <p>Name: {{ name }}</p>
      <p>Age: {{ age }}</p>
  
      <button @click="updateAge">Increase Age</button>
    </div>
  </template>
  
  <script>
  import { reactive, toRefs } from 'vue';
  
  export default {
    setup() {
      // Create a reactive object
      const user = reactive({
        name: 'John Doe',
        age: 30,
      });
  
      // Convert the object to individual reactive refs
      const { name, age } = toRefs(user);
  
      const updateAge = () => {
        age.value += 1;
        name.value = name.value + age.value
      };
  
      return {
        name,
        age,
        updateAge,
      };
    },
  };
  </script>
  