<template>
     <p>Is the reactive object reactive? {{ isReactiveObj }}</p>
     <p>Is the non-reactive object reactive? {{ isNonReactiveObj }}</p>
</template>


<script setup>
import { reactive, isReactive } from 'vue';

// Create a reactive object
const reactiveObj = reactive({ name: 'John', age: 30 });
// Create a plain (non-reactive) object
const nonReactiveObj = { name: 'Doe', age: 25 };

// Check if the objects are reactive
const isReactiveObj = isReactive(reactiveObj);
const isNonReactiveObj = isReactive(nonReactiveObj);
</script>