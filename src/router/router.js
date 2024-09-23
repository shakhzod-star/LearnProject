export const routers = [
    {   
        path: '/', 
        component: () => import('@/pages/Main/index.vue'),
        children: [
            // core
            {
                path: 'composable',
                name: 'Composable',
                component: () => import('@/views/composable/index.vue')
            }, 
            {
                path: 'mixins',
                name: 'Mixins',
                component: () => import('@/views/mixins/index.vue')
            }, 
            {
                path: 'readonly',
                name: 'Readonly',
                component: () => import('@/views/core/readonly/index.vue')
            }, 
            {
                path: 'watch-effect',
                name: 'WatchEffect',
                component: () => import('@/views/core/watchEffect/index.vue')
            }, 
            {
                path: 'watch-post-effect',
                name: 'watchPostEffect',
                component: () => import('@/views/core/watchPostEffect/index.vue')
            }, 
            {
                path: 'watch-sync-effect',
                name: 'watchSyncEffect',
                component: () => import('@/views/core/watchSyncEffect/index.vue')
            }, 
            {
                path: 'on-watcher-cleanup',
                name: 'onWatcherCleanup',
                component: () => import('@/views/core/onWatcherCleanup/index.vue')
            },
            // utilities
            {
                path: 'isref',
                name: 'isRef',
                component: () => import('@/views/utilities/isRef/index.vue')
            },
            {
                path: 'unref',
                name: 'unRef',
                component: () => import('@/views/utilities/unRef/index.vue')
            },
            {
                path: 'toref',
                name: 'toRef',
                component: () => import('@/views/utilities/toRef/index.vue')
            },
            {
                path: 'tovalue',
                name: 'toValue',
                component: () => import('@/views/utilities/toValue/index.vue')
            },
            {
                path: 'torefs',
                name: 'toRefs',
                component: () => import('@/views/utilities/toRefs/index.vue')
            },
            {
                path: 'isproxy',
                name: 'isProxy',
                component: () => import('@/views/utilities/isProxy/index.vue')
            },
            {
                path: 'isreactive',
                name: 'isReactive',
                component: () => import('@/views/utilities/isReactive/index.vue')
            },
            {
                path: 'isreadonly',
                name: 'isReadonly',
                component: () => import('@/views/utilities/isReadonly/index.vue')
            },
            // helpers
            {
                path: 'useattrs',
                name: 'useAttrs',
                component: () => import('@/views/helpers/useAttrs/index.vue')
            },
            {
                path: 'useslots',
                name: 'useSlots',
                component: () => import('@/views/helpers/useSlots/index.vue')
            },
            {
                path: 'usemodel',
                name: 'useModel',
                component: () => import('@/views/helpers/useModel/index.vue')
            },
            {
                path: 'usetemplateref',
                name: 'useTemplateRef',
                component: () => import('@/views/helpers/useTemplateRef/index.vue')
            },
            {
                path: 'useid',
                name: 'useId',
                component: () => import('@/views/helpers/useId/index.vue')
            },
            
          ], 
    }, 
]  