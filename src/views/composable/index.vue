<template> 
    {{ count }}{{ countTwo }} 
    <button @click="counterFn()" >click me bro</button>  
</template>
<!-- Composable js -->
<script setup>
    import { useGlobalComposable} from '@/views/composable'; 
    const { count, counterFn,countTwo, } = useGlobalComposable() 
    // const { countTwo } = useSecond()  
</script>