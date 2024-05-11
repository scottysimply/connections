<script>
    export default {
        data() {
            return {
                connections: [
                    {
                        id: 1,
                        hint: "Lift-offs",
                        words: [
                            {word: "Bound", selected: false},
                            {word: "Leap", selected: false},
                            {word: "Jump", selected: false},
                            {word: "Spring", selected: false}
                        ]   
                    },
                    {
                        id: 2,
                        hint: "Gears",
                        words: [
                            {word: "Ratio", selected: false},
                            {word: "Teeth", selected: false},
                            {word: "Shift", selected: false},
                            {word: "Mesh", selected: false}
                        ]
                    },
                    {
                        id: 3,
                        hint: "Colors",
                        words: [
                            {word: "Gamboge", selected: false},
                            {word: "Chartreuse", selected: false},
                            {word: "Feldgrau", selected: false},
                            {word: "Amaranth", selected: false}
                        ]
                    },
                    {
                        id: 4,
                        hint: "Exotic Pets",
                        words: [
                            {word: "Dik Dik", selected: false},
                            {word: "Hyrax", selected: false},
                            {word: "Caecilian", selected: false},
                            {word: "Springhaas", selected: false}
                        ]
                    },
                ],
            }
 
        },
        methods: {
            getState() {
                // Initialize array
                let words = []

                // Add to array
                for (let ctn of this.connections) {
                    for (let word of ctn.words) {
                        words.push(word);
                    }
                }

                // return
                return words;
            }
        }
    }
</script>
<template>
    <div id="gameboard" class="game-board">
        <game-button v-for="info in this.getState()">{{info.word}}</game-button>
    </div>
    <button id="btn-shuffle">Shuffle Words</button>
    <button id="btn-guess">Guess</button>
</template>
<style>

</style>