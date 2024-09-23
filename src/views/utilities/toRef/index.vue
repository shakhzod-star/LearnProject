<template>
    <div>
      <h2>Parent Component</h2>
      <p>Original object: {{ user }}</p>
      <p>Reactive ref in child: {{ userNameRef }}</p>
      
      <ChildComponent :name="userNameRef" />
      <button @click="updateName">Update Name</button>
    </div>
  </template>
  
  <script>
  import { reactive, toRef } from 'vue';
  import ChildComponent from './childComponent.vue';
  
  export default {
    name: 'ParentComponent',
    components: {
      ChildComponent
    },
    setup() {
      const user = reactive({
        name: 'John Doe',
        age: 30
      });
  
      const userNameRef = toRef(user, 'name'); // Creating a ref for `user.name`
  
      const updateName = () => {
        user.name = 'Jane Doe'; // This will also update the ref
      };
  
      return {
        user,
        userNameRef,
        updateName
      };
    }
  };
  </script>
  