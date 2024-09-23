<template>
    <div>
      <h3>Child Component</h3>
      <p>Received Name: {{ name }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChildComponent',
    props: {
      name: {
        type: String,
        required: true
      }
    }
  };
  </script>
  