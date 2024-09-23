<template>
    <div>
      <h2>toValue(1) : {{ toValue(1) }}</h2>
      <h2>toValue(ref(1)): {{ toValue(ref(1)) }}</h2>
      <h2>toValue(() => 1): {{ toValue(() => 1) }}</h2>
    </div>
  </template>
  
  <script setup>
  import {ref ,toValue } from 'vue'; 
  </script>
  