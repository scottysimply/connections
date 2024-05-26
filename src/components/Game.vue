<script>
    export default {
        data() {
            return {
                connections: [
                    {
                        id: 1,
                        hint: "Lift-offs",
                        words: [
                            "Bound",
                            "Leap",
                            "Jump",
                            "Spring"
                        ],
                        solved: false,
                    },
                    {
                        id: 2,
                        hint: "Gears",
                        words: [
                            "Ratio",
                            "Teeth",
                            "Shift",
                            "Mesh"
                        ],
                        solved: false,
                    },
                    {
                        id: 3,
                        hint: "Colors",
                        words: [
                            "Gamboge",
                            "Chartreuse",
                            "Feldgrau",
                            "Amaranth"
                        ],
                        solved: false,
                    },
                    {
                        id: 4,
                        hint: "Exotic Pets",
                        words: [
                            "Dik Dik",
                            "Hyrax",
                            "Caecilian",
                            "Springhaas"
                        ],
                        solved: false,
                    },
                ],
                selected: [
                    
                ]
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
            },
            onGuess() {
                switch (this.selected.length) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        console.log("too few selected");
                        return; // It isn't a "wrong" guess if you don't select 4.
                    // Only length 4 can be a correct guess.
                    case 4:
                        /* Algorithm should: 
                         * To start, we need to find the first connection with any seleted words.
                         * This will require 2 for loops. The outer loop will check the connections, the inner loop will check the selected words. Both will be forEach loops with index.
                         * 
                         * 
                         * 
                        */
                        // Check each connection
                        for (let ctnIndex = 0; ctnIndex < this.connections.length; ctnIndex++) {
                            // Check each selected word for this connection
                            let selected_count = 0;
                            for (let selIndex = 0; selIndex < this.selected.length; selIndex++) {
                                // Check if connection contains selected word
                                if (this.connections[ctnIndex].words.includes(this.selected[selIndex])) {
                                    selected_count++;
                                }
                                // On last iteration, check how many words were selected
                                if (selIndex == this.selected.length - 1) {
                                    if (selected_count == 4) {
                                        // Solved!
                                        this.correctGuess(this.connections[ctnIndex]);
                                        return;
                                    }
                                    else if (selected_count > 0) {
                                        // Guess was incorrect.
                                        this.wrongGuess();
                                        return;
                                    }
                                    else {
                                        // Do nothing
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                    default: // If anything else went wrong (exception?), give wrong guess
                        this.wrongGuess();
                        break;
                }
            },
            correctGuess(connection) {
                console.log("correct");
                // Change connections data to solved:
                connection.solved = !connection.solved;
                // Unselect the connections
                this.selected = [];
            },
            wrongGuess() {
                console.log("L bozo");
                // Unselect connections
                this.selected = [];
            },
            onSelected(isSelected, word) {
                if (isSelected) {
                    this.selected.push(word)
                }
                else {
                    let index = this.selected.findIndex((element) => element == word);
                    if (index != -1) {
                        this.selected.splice(index, 1);
                    }
                }
            }
        }
    }
</script>
<template>
    <div id="gameBoard" class="game-board">
        <connection v-for="ctn in this.connections" :ctn-data="ctn" v-on:grandchildselected="onSelected" :solved="ctn.solved"></connection>
    </div>
    <button id="btn-shuffle">Shuffle Words</button>
    <button id="btn-guess" v-on:click="this.onGuess">Guess</button>
</template>
<style>
    .game-board {
        display: grid;
        grid-template: auto auto auto auto / auto auto auto auto;
        justify-content: center;
    }
</style>