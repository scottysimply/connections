<script>
    export default {
        data() {
            return {
                selected: false,
            }
        },
        methods: {
            on_click() {
                this.selected = !this.selected;
                this.$emit('childselected', this.selected, this.$refs.wordSlot.textContent);
            }
        },
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
        margin: 3px 3px 12px 12px;
        height: 80px;
        width: 200px;
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