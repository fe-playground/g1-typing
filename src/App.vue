<template>
  <div id="app">
    <TypingHeader></TypingHeader>
    <TypingInputUser></TypingInputUser>
    <TypingTimer></TypingTimer>
    <TypingInputText></TypingInputText>
    <TypingRank></TypingRank>
  </div>
</template>

<script>
import TypingHeader from './components/TypingHeader.vue'
import TypingInputUser from './components/TypingInputUser.vue'
import TypingInputText from './components/TypingInputText.vue'
import TypingTimer from './components/TypingTimer.vue'
import TypingRank from './components/TypingRank.vue'

export default {
  name: 'app',
  components: {
    TypingHeader,
    TypingInputUser,
    TypingInputText,
    TypingTimer,
    TypingRank
  }
}
</script>

<style>
body {
  text-align: center;
}
</style>
