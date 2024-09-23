<template> 
  <div style="display: flex; flex-direction: column;">
    <Navbar/> 
    <router-view></router-view> 
  </div>
</template>

<!-- Composable js -->
<script setup>
import Navbar from '@/pages/Navbar/index.vue'
</script>