<script>
    export default {
        data() {
            return {
                hint: this.ctnData.hint,
                id: this.ctnData.id,
                words: this.ctnData.words,
            }
        },
        props: ['ctnData', 'solved'],
        methods: {
            onSelected(isSelected, btnWord) {
                this.$emit("grandchildselected", isSelected, btnWord)
            },
        },
        emits: ['grandchildselected']
    }
</script>
<template>
    <game-button v-if="!this.solved" v-for="word in this.words" v-on:childselected="onSelected">{{word}}</game-button>
    <solved-label v-if="this.solved">{{this.hint}}</solved-label>
</template>
<style>
    * {
        --connection-1: #f6ec91;
        --connection-2: #ed97c9;
        --connection-3: #88bffa;
        --connection-4: #ac8bd6;
    }
    .solved-connection {
        grid-column: 1/-1;
    }
</style>