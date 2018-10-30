<template>
    <div class="contents">
        <ul class="textList">
          <TypingInputText 
            v-for="(text, index) in data"
            :key="index"
            :text="text"
            :isActive="activeIdx === index"
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
  computed: {
    ...mapState([
      'data',
      'activeIdx'
    ])
  },
  methods: {
    ...mapMutations([
      'stopTimer',
      'resetTyping'
    ])
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
