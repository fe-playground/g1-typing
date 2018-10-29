<template>
    <div class="contents">
        <ul class="textList">
          <TypingInputText 
            v-for="(text, index) in data"
            :key="index"
            :text="text"
            :isActive="activeIdx === index"
            :complete="complete"
          />
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import TypingInputText from './TypingInputText.vue'

export default {
  components: {
    TypingInputText
  },
  data() {
    return {
      activeIdx: 0
    }
  },
  computed: {
    ...mapState([
      'data'
    ])
  },
  methods: {
    ...mapMutations([
      'stopTimer',
      'resetTyping'
    ]),
    complete() {
      this.activeIdx++;
      if(this.activeIdx > this.data.length) {
        this.stopTimer();
        this.resetTyping();
        this.activeIdx = 0;
      }
    }
  },
  created() {
    this.$store.dispatch('getTextData');
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
