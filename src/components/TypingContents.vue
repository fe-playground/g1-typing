<template>
    <div class="contents">
        <ul class="textList">
          <TypingInputText 
            v-for="(text, index) in data"
            :key="index"
            :text="text"
            :isActive="activeIdx === index"
            :complete="complete"
            :isSuccess="isSuccess"
          />
        </ul>
    </div>
</template>

<script>
import TypingInputText from './TypingInputText.vue'

export default {
  components: {
    TypingInputText
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    stopTimer: Function,
    resetTyping: Function,
    isSuccess: Boolean
  },
  data() {
    return {
      activeIdx: 0
    }
  },
  methods: {
    complete() {
      this.activeIdx++;
      if(this.activeIdx > this.data.length) {
        this.stopTimer();
        this.resetTyping();
        this.activeIdx = 0;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.contents {
  padding: 1rem 0;
  .textList {
    text-align: left;
  }
}
</style>
