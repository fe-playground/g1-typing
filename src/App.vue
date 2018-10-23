<template>
  <div id="app">
    <TypingHeader></TypingHeader>
    <TypingInputUser></TypingInputUser>
    <TypingTimer></TypingTimer>
    <TypingContents :data="data"></TypingContents>
    <TypingRank></TypingRank>
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
      data
    }
  }
}
</script>

<style>
body {
  text-align: center;
}
</style>
