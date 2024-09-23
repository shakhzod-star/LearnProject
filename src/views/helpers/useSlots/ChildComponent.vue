<template>
    <div>
      <h3>Default Slot Content:</h3>
      <slot />
      
      <h3>Named Slot "header" Content:</h3>
      <slot name="header" />
  
      <h3>Named Slot "footer" Content:</h3>
      <slot name="footer" />
    </div>
  </template>
  
  <script setup>
  import { useSlots } from 'vue';
  
  // Access slots with useSlots
  const slots = useSlots();
  
  if (slots.default) {
    console.log('Default slot is provided');
  }
  
  if (slots.header) {
    console.log('Header slot is provided');
  }
  
  if (slots.footer) {
    console.log('Footer slot is provided');
  }
  </script>
  