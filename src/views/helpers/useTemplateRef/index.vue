<!-- <script>
export default {
  mounted() {
    this.$refs.input.focus()
  }
}
</script>

<template>
  <input ref="input" />
</template> -->

 
<script setup>
import { useTemplateRef,ref, onMounted } from 'vue'

const inputRef = useTemplateRef('input') 
function fn() {
    inputRef.value.focus()
} 
</script>

<template>
  <input ref="input" />
  <button @click="fn">clickMe</button>
</template>