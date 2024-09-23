<script setup>
import { useId } from 'vue'

const id = useId()
</script>

<template>
  <form>
    <label :for="id" > Name: </label>
    <input :id="id" type="text" />  
    в крупных приложениях с несколькими компонентами ручное назначение идентификаторов может привести к коллизиям. useId()автоматизирует этот процесс и гарантирует уникальность.
  </form>
</template>