<template>
  <div id="app">
    <TypingHeader/>
    <TypingInputUser/>
    <TypingTimer/>
    <TypingContents/>
    <TypingRank/>
  </div>
</template>

<script>
import TypingHeader from './components/TypingHeader.vue'
import TypingInputUser from './components/TypingInputUser.vue'
import TypingContents from './components/TypingContents.vue'
import TypingTimer from './components/TypingTimer.vue'
import TypingRank from './components/TypingRank.vue'

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
      user: '',
      time: 0,
      myTimer: null,
      rank: [],
      isSuccess: true
    }
  },
  methods: {
    // startTyping(user) {
    //   this.user = user;
    //   this.isSuccess = false;
    //   this.insertRank();
    // },
    // startTimer() {
    //   this.myTimer = setInterval( () => {
    //     this.time++;
    //     this.updateRank();
    //   }, 1000);
    // },
    // stopTimer() {
    //   clearInterval(this.myTimer);
    // },
    // insertRank() {
    //   let newRank = [
    //     ...this.rank,
    //     {
    //       user: this.user,
    //       time: this.time
    //     }
    //   ];
    //   this.rank = this.sortRank(newRank);
    // },
    // updateRank() {
    //   let newRank = this.rank.map(user => user.user === this.user ? { ...user, time: this.time } : user);
    //   this.rank = this.sortRank(newRank);
    // },
    // sortRank(rank) {
    //   return rank.sort((a, b) => a.time - b.time);
    // },
    // resetTyping() {
    //   this.isSuccess = true;
    // }
  },
  watch: {
    isSuccess() {
      if(this.isSuccess) {
        this.user = '';
        this.time = 0;
      }
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
