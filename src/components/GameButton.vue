<script>
    export default {
        methods: {
            on_click() {
                // This is incredibly jank but hear me out.
                // 1. Send opposite selection state to the parent component (Game.vue)
                // 2. Parent component will swap state in this.connections
                // 3. Prop 'selected' is reactive, and updates accordingly.
                this.$emit('childselected', !this.selected, this.$refs.wordSlot.textContent);
            }
        },
        props: ['selected'],
        emits: ['childselected']
    }
</script>
<template>
    <button class="game-button" v-on:click="on_click" :class="selected ? 'selected' : ''"><span ref="wordSlot"><slot></slot></span></button>
</template>
<style>
    * {
        --button-unselected: #bcf0d2;
        --button-selected: #35b361;
    }
    .game-button {
        background-color: var(--button-unselected);
        border: none;
        font-size: 1rem;
    }
    .selected {
        background-color: var(--button-selected);
    }
    /*    Controls */
    .game-button:hover {
        cursor: pointer;
        filter: brightness(1.15);
    }
</style>