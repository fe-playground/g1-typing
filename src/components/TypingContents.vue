<template>
    <div>
        <ul>
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
import TypingInputText from './TypingInputText.vue'

export default {
  components: {
    TypingInputText
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeIdx: 0
    }
  },
  methods: {
    complete() {
      this.activeIdx++;
    }
  }
}
</script>

<style>

</style>
