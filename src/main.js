import { createApp } from 'vue'
import App from './App.vue'
import Game from './components/Game.vue'
import GameButton from './components/GameButton.vue';

createApp(App)
    .component("Game", Game)
    .component("GameButton", GameButton)
    .mount('#app')
