<template>
  <div id="app">
    <TypingHeader></TypingHeader>
    <TypingInputUser
      :user="user"
      :regUser="regUser"
      :startTimer="startTimer"
    />
    <TypingTimer
      :time="time|hhmmss"></TypingTimer>
    <TypingContents
      :data="data"
      :stopTimer="stopTimer"
      :resetTimer="resetTimer"
      :updateRank="updateRank"
    />
    <TypingRank
      :rank="rank"
    />
  </div>
</template>

<script>
import TypingHeader from './components/TypingHeader.vue'
import TypingInputUser from './components/TypingInputUser.vue'
import TypingContents from './components/TypingContents.vue'
import TypingTimer from './components/TypingTimer.vue'
import TypingRank from './components/TypingRank.vue'
import data from './assets/data.json'

export default {
  name: 'app',
  components: {
    TypingHeader,
    TypingInputUser,
    TypingContents,
    TypingTimer,
    TypingRank
  },
  data() {
    return {
      data,
      user: '',
      time: 0,
      myTimer: null,
      rank: []
    }
  },
  methods: {
    regUser(user) {
      this.user = user;
    },
    startTimer() {
      this.myTimer = setInterval( () => {
        this.time++;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.myTimer);
    },
    resetTimer() {
      this.stopTimer();
      this.time = 0;
    },
    updateRank() {
      this.rank = [
        ...this.rank,
        {
          user: this.user,
          time: this.time
        }
      ]
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: #f6f6f6;
  text-align: center;
  margin: 3rem;
}
button {
  border-style: groove;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.inputBox {
  background: #fff;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  input {
    outline: none;
    border-style: none;
    font-size: 1.1rem;
  }
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
