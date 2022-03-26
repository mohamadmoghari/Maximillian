import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'


import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from './components/UI/BaseDialog.vue'

import LearningResources from './components/LearningResources/LearningResources.vue'
import AddResouce from './components/LearningResources/AddResource.vue'

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            { path: '/LearningResources', component: LearningResources },
            { path: '/AddResource', component: AddResouce }
        ]
    }
);

const app = createApp(App);

app.use(router);

app.component('BaseCard', BaseCard)
app.component('BaseButton', BaseButton)
app.component('BaseDialog', BaseDialog)

app.mount('#app')
