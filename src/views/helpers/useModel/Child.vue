<template>
  <div>
    <h2>Child Component</h2>
    <input v-model="localValue" placeholder="Edit me from child"/>
  </div>
</template>

<script setup>
import { useModel } from 'vue';

const props = defineProps({
  modelValue: String
});

const emit = defineEmits(['update:modelValue']);
const localValue = useModel(props, 'modelValue', emit);
</script>
