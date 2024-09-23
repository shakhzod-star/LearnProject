<template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="count++">clickme</button>
      <button @click="startWatcher">Start Watching</button>
      <button @click="stopWatcher">Stop Watching</button>
    </div>
  </template>
  
  <script>
  import { ref, watch, onUnmounted } from 'vue';
  
  export default {
    setup() {
      const count = ref(0);
      let stopWatching = null;
  
      // Function to start watching the 'count' ref
      const startWatcher = () => {
        // Watch the 'count' ref
        stopWatching = watch(count, (newVal, oldVal) => {
          console.log(`Count changed from ${oldVal} to ${newVal}`);
        });
  
        // Perform any additional setup if needed
      };
  
      // Function to stop the watcher manually
      const stopWatcher = () => {
        if (stopWatching) {
          stopWatching(); // Call stop function to clean up the watcher
          console.log('Watcher stopped');
        }
      };
  
      // Clean up the watcher when the component is unmounted
      onUnmounted(() => {
        stopWatcher();
      });
  
      return {
        count,
        startWatcher,
        stopWatcher,
      };
    }
  };
  </script>
  