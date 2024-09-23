<template> 
    <div style="display: flex; flex-direction: column;">
        <div>
            Reactivity: Core:
        </div>
        <div style="display: flex;">
            <router-link :to="{ name: 'Composable' }">Composable,</router-link>
            <router-link :to="{ name: 'Mixins' }"> Mixins, </router-link> 
            <router-link :to="{ name: 'Readonly' }">Readonly,</router-link> 
            <router-link :to="{ name: 'WatchEffect' }">WatchEffect,</router-link> 
            <router-link :to="{ name: 'watchPostEffect' }">watchPostEffect,</router-link> 
            <router-link :to="{ name: 'watchSyncEffect' }">watchSyncEffect,</router-link> 
            <router-link :to="{ name: 'onWatcherCleanup' }">onWatcherCleanup,</router-link>     
        </div>
        <div>
            Reactivity: Utilities:
        </div>
        <div style="display: flex;">
            <router-link :to="{ name: 'isRef' }">isRef,</router-link>
            <router-link :to="{ name: 'unRef' }"> unref, </router-link> 
            <router-link :to="{ name: 'toRef' }">toRef,</router-link> 
            <router-link :to="{ name: 'toValue' }">toValue,</router-link> 
            <router-link :to="{ name: 'toRefs' }">toRefs,</router-link> 
            <router-link :to="{ name: 'isProxy' }">isProxy,</router-link> 
            <router-link :to="{ name: 'isReactive' }">isReactive,</router-link>     
            <router-link :to="{ name: 'isReadonly' }">isReadonly,</router-link>     
        </div>
        <div>
           Helpers:
        </div>
        <div style="display: flex; width: 100%; border-bottom: 1px solid grey;">
            <router-link :to="{ name: 'useAttrs' }">useAttrs,</router-link>
            <router-link :to="{ name: 'useSlots' }"> useSlots, </router-link> 
            <router-link :to="{ name: 'useModel' }">useModel,</router-link> 
            <router-link :to="{ name: 'useTemplateRef' }">useTemplateRef,</router-link> 
            <router-link :to="{ name: 'useId' }">useId,</router-link>     
        </div>
        
    </div>
</template>