<script>
    export default {
        props: ['ctnData', 'id']
    }
</script>
<template>
    <div class="solved-connection">
        <p class="solved-hint"><slot></slot></p>
        <p class="solved-words"><span v-for="word in ctnData.words" class="word">{{word.word}}</span></p>
    </div>
</template>
<style scoped>
    .connection-1 {
        background-color: #f6ec91;
    }
    .connection-2 {
        background-color: #ed97c9;
    }
    .connection-3 {
        background-color: #88bffa;
    }
    .connection-4 {
        background-color: #ac8bd6;
    }
    .solved-hint {
        margin-top: 12px;
        margin-bottom: 0px;
        font-size: larger;
    }
    .solved-words {
        margin-top: 6px;
    }
    .solved-connection {
        grid-column: 1/-1;
        text-align: center;
    }
    .word:not(:last-child)::after {
        content: ", ";
    }
</style>