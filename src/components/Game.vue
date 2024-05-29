<script>
    export default {
        mounted() {
            this.seed = this.generateSeed(this.getState().length);
        },
        data() {
            return {
                connections: [
                    {
                        id: 1,
                        hint: "Lift-offs",
                        words: [
                            {word:"Bound", selected: false},
                            {word:"Leap", selected: false},
                            {word:"Jump", selected: false},
                            {word:"Spring", selected: false},
                        ],
                        solved: false,
                    },
                    {
                        id: 2,
                        hint: "Gears",
                        words: [
                            {word:"Ratio", selected: false},
                            {word:"Teeth", selected: false},
                            {word:"Shift", selected: false},
                            {word:"Mesh", selected: false},
                        ],
                        solved: false,
                    },
                    {
                        id: 3,
                        hint: "Alcoholic Colors",
                        words: [
                            {word:"Marsala", selected: false},
                            {word:"Chartreuse", selected: false},
                            {word:"Sauterne", selected: false},
                            {word:"Burgundy", selected: false},
                        ],
                        solved: false,
                    },
                    {
                        id: 4,
                        hint: "Animals With Weird Names",
                        words: [
                            {word:"Dik Dik", selected: false},
                            {word:"Hyrax", selected: false},
                            {word:"Caecilian", selected: false},
                            {word:"Springhaas", selected: false},
                        ],
                        solved: false,
                    },
                ],
                solvedConnections: [],
                seed: [],
                flattenedConnections: [],
            }
        },
        methods: {
            getState() {
                // Initialize array
                let words = []

                // Add to array
                for (let ctn of this.connections) {
                    for (let wordData of ctn.words) {
                        words.push({word: wordData.word, selected: wordData.selected, id: ctn.id, solved: ctn.solved, hint: ctn.hint});
                    }
                }

                // Utilize random seed
                if (this.seed.length != 0) {
                    for (let i = 0; i < words.length; i++) {
                        [words[i], words[this.seed[i]]] = [words[this.seed[i]], words[i]]
                    }
                }

                // return
                return words;
            },
            onGuess() {
                // Get word array length
                const wordsLength = this.connections[0].words.length;

                // Map connections to selected words count
                let selectedCount = this.connections.map((ctn) => {
                    // Return count of selected words
                    return ctn.words.filter((wordData) => wordData.selected).length;
                });
                
                // If sum of every item in selected words count is not equal to words length, don't count that as a guess
                if (selectedCount.reduce((prev, current) => prev+current) == wordsLength) {
                    // Now determine whether the guess was correct or not.
                    for (let i = 0; i < selectedCount.length; i++) {
                        if (selectedCount[i] == wordsLength) {
                            this.correctGuess(this.connections[i]);
                            return;
                        }
                        else if (i == selectedCount.length - 1) {
                            this.wrongGuess();
                            return;
                        }
                    }
                }
                else {
                    console.log("Incorrect amount selected");
                }
            },
            correctGuess(connection) {
                // Change connections data to solved:
                connection.solved = true;
                this.solvedConnections.push(connection);
                
                // Deselect
                this.deselectWords();
            },
            wrongGuess() {
                this.deselectWords();
            },
            deselectWords() {
                for (let ctn of this.connections) {
                    for (let wordData of ctn.words) {
                        wordData.selected = false;
                    }
                }
            },
            onSelected(isSelected, word) {
                for (let ctn of this.connections) {
                    for (let wordData of ctn.words) {
                        if (wordData.word == word) {
                            wordData.selected = isSelected;
                        }
                    }
                }
            },
            onShuffle() {
                this.seed = generateSeed(this.seed.length);
            },
            generateSeed(length) {
                // Shuffle algorithm
                let indices = [];
                for (let i = 0; i < length; i++) {
                    let index = Math.floor(Math.random() * i);
                    indices.push(index);
                }
                return indices;
            },
        }
    }
</script>
<template>
    <div id="gameBoard" class="game-board">
        <solved-label v-for="solvedCtn in this.solvedConnections" :ctn-data="solvedCtn" :class="`connection-${solvedCtn.id}`">{{solvedCtn.hint}}</solved-label>
        <template v-for="unsolvedCtn in this.getState()">
            <game-button v-if="!unsolvedCtn.solved" v-on:childselected="onSelected" :selected="unsolvedCtn.selected">{{unsolvedCtn.word}}</game-button>
        </template>
        <!-- <template v-for="ctn in this.connections" :ctn-data="ctn" :solved="ctn.solved">
            <game-button v-if="!ctn.solved" v-for="wordData in ctn.words" v-on:childselected="onSelected" :selected="wordData.selected">{{wordData.word}}</game-button>
            <solved-label v-if="ctn.solved" :ctn-data="ctn" :class='`connection-${ctn.id}`'>{{ctn.hint}}</solved-label>
        </template> -->
    </div>
    <button id="btn-shuffle" v-on:click="this.onShuffle">Shuffle Words</button>
    <button id="btn-guess" v-on:click="this.onGuess">Guess</button>
</template>
<style>
    .game-board {
        display: grid;
        grid-template: 100px 100px 100px 100px / 20% 20% 20% 20%;
        justify-content: center;
        width: 80vw;
        margin: auto auto auto auto;
    }
</style>