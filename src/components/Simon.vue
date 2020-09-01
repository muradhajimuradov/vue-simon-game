<template>
  <div class="game-area">
    <div class="game">
      <div class="square">
        <div class="cell" @click="handleSelectedItem" id="red" ref="1"></div>
        <div class="cell" @click="handleSelectedItem" id="green" ref="2"></div>
        <div class="cell" @click="handleSelectedItem" id="blue" ref="3"></div>
        <div class="cell" @click="handleSelectedItem" id="yellow" ref="4"></div>
      </div>
    </div>
    <div class="info">
      <div class="difficulty">
        <label>DIFFICULTY:</label>
        <select :disabled="isDisabled" v-model="difficulty">
          <option value="easy">EASY</option>
          <option value="normal">NORMAL</option>
          <option value="hard">HARD</option>
        </select>
      </div>
      <div class="level">
        <span>CURRENT LEVEL: {{$data.level }}</span>
      </div>
      <div class="control">
        <button :disabled="isDisabled" v-on:click="startNewGame">START NEW GAME</button>
      </div>
      <div class="warning">
        <span>{{ $data.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Simon",
  data() {
    return {
      message: "",
      moves: [],
      level: 1,
      playerMove: "",
      moveNumber: 0,
      difficulty: "easy",
      difficultyDelay: { easy: 1500, normal: 1000, hard: 400 },
      colors: { red: 1, green: 2, blue: 3, yellow: 4 },
      sound: {
        2: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
        1: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
        3: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
        4: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
      },
      isDisabled: false,
    };
  },
  methods: {
    random: function (min, max) {
      return Math.round(min + Math.random() * (max - min));
    },
    sleep: function (ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    startNewGame: async function () {
      this.isDisabled = true;
      this.message = "THE GAME HAS STARTED";
      this.moves = [];
      this.moveNumber = 0;
      this.level = 1;
      for (let i = 0; i < this.level; i++) {
        this.moves.push(this.random(1, 4));
      }

      await this.playAllCells();

      this.isDisabled = false;
      this.message = "NOW REPEAT!";
    },
    handleSelectedItem: async function (event) {
      if (!this.isDisabled && this.moves.length>0) {
        this.sound[this.colors[event.target.id]].play();
        if (this.colors[event.target.id] != this.moves[this.moveNumber]) {
          this.message = "YOU LOSE ON " + this.level + " LEVEL";
          this.moveNumber = 0;
          this.level = 1;
          this.moves = [];
        } else {
          this.$refs[this.moves[this.moveNumber]].classList.add("shadow");
          await this.sleep(100);
          this.$refs[this.moves[this.moveNumber]].classList.remove("shadow");

          if (this.moveNumber == this.level - 1) {
            this.message = "YOU WON THE " + this.level + " LEVEL";
            this.level++;
            this.moves.push(this.random(1, 4));
            this.moveNumber = 0;
            this.isDisabled = true;
            await this.sleep(1000);
            await this.playAllCells();
            this.isDisabled = false;
          } else {
            this.moveNumber++;
          }
        }
      }
    },
    playAllCells: async function () {
      for (let j = 0; j < this.level; j++) {
        this.sound[this.moves[j]].play();
        this.$refs[this.moves[j]].classList.add("shadow");
        await this.sleep(this.difficultyDelay[this.difficulty] / 2);
        this.$refs[this.moves[j]].classList.remove("shadow");
        await this.sleep(this.difficultyDelay[this.difficulty] / 2);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .game-area
    display: flex
    flex-wrap: wrap
    height: 100%
    margin: auto
    margin-top: 100px

  .game
    flex-grow: 1
    position: relative
    height: 400px

  .square
    width: 200px
    height: 200px
    margin-top: 100px
    margin-left: auto
    margin-right: auto
    background: white
    display: table

  .cell
    height: 90px
    width: 90px
    border: 5px solid white
    float: left
    display: table-cell
    transform: scale(1.0,1.0)

  .shadow
    opacity: 0.3
    transform: scale(1.1, 1.1)

  #red
    background-color: rgb(255,51,0)

  #green
    background-color: rgb(102,204,51)

  #blue
    background-color: rgb(2,165,255)

  #yellow
    background-color: rgb(255,204,0)

  .info
    flex-grow: 1
    position: relative
    height: 400px

  .level
    margin-top: 50px
    color: rgb(255,51,0)
    font-size: 150%
    font-weight: 900

  .warning
    margin-top: 50px
    color: wheat
    font-size: 130%

  .difficulty
    margin-top: 50px
    color: white

  .control
    margin-top: 50px

  .control > button
    padding: 20px
</style>
