<template>
    {{ original }}
    {{ copy }}
    <button @click="fn">clickME</button>
</template>

<script setup>
import { reactive,watchEffect,readonly } from 'vue'
const original = reactive({ count: 0 })

const copy = readonly(original)

watchEffect(() => {
  // works for reactivity tracking
  console.log(copy.count)
}) 
const fn = () => {
    // mutating original will trigger watchers relying on the copy
    original.count++   
    // mutating the copy will fail and result in a warning
    copy.count++ // warning!
} 

</script>