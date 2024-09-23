<template>
    <div v-if="open" ref="messageContainer" class="message-container">
      <p  v-for="(msg, index) in messages" :key="index">{{ msg }}</p>
    </div>
    <input v-model="newMessage" @keyup.enter="addMessage" placeholder="Type a message and press Enter" />
    <button @click="open = !open">clickMe</button>
 </template>
  
  <script setup> 
        import { ref, watchPostEffect } from 'vue'; 
        const newMessage = ref('');
        const messages = ref(['Hello!', 'Welcome to the chat!']);
        const messageContainer = ref(null);
        const open = ref(false)

        // Function to add a new message
        const addMessage = () => {
        if (newMessage.value.trim() !== '') {
            messages.value.push(newMessage.value);  // Use .value to modify the ref
            newMessage.value = '';
        }
        };  
        // Use watchPostEffect to scroll to the bottom after DOM is updated
        watchPostEffect(() => { 
            if (messageContainer.value) {
                messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
            }
        });   
  </script>
  
  <style>
  .message-container {
    height: 200px;
    overflow-y: auto;
    border: 1px solid #ccc;
    padding: 10px;
  }
  </style>
  