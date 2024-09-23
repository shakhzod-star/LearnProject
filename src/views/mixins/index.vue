
<template> 
    {{ count }}
    <button @click="counterFn()" >click me bro</button>  
    {{ msg }}
</template>
<!-- Mixins -->
<script>
    import { myMixin,useSecond } from '@/views/mixins'  
    export default {
        mixins: [myMixin,useSecond],
        data(){
            return {
                // count : 11111, 
            }
        }
    }
</script>