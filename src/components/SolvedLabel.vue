<script>
    export default {
        data() {
            return {

            }
        },
    }
</script>
<template>
    <div class="solved-connection">
        <p class="solved-text"><slot></slot></p>
    </div>
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