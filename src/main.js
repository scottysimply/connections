import { createApp } from 'vue'
import App from './App.vue'
import Game from './components/Game.vue'
import GameButton from './components/GameButton.vue';
import SolvedLabel from './components/SolvedLabel.vue';
import Connection from './components/Connection.vue';

createApp(App)
    .component("Game", Game)
    .component("GameButton", GameButton)
    .component("Connection", Connection)
    .component("SolvedLabel", SolvedLabel)
    .mount('#app')
