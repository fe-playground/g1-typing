<template>
  <li class="textContainer">
    <div class="text">{{ text }}</div>
    <div
      class="inputBox shadow"
      v-bind:class="{ active: isActive}">
      <input
        type="text"
        placeholder="위 문장을 입력하세요"
        @keyup="typing"
        :readonly="this.getSuccess || !isActive"
        ref="input"
        v-model="input"
      />
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    text: String,
    isActive: Boolean,
    complete: Function
  },
  data() {
    return {
      isComplete: false,
      input: ''
    }
  },
  methods: {
    typing(event) {
      if(this.text === event.target.value) {
        this.isComplete = true;
        this.complete();
      }
    }
  },
  computed: {
    ...mapGetters(['getSuccess'])
  },
  updated() {
    if(this.isActive) this.$refs.input.focus();
    if(this.success) this.input = '';
  }
}
</script>

<style scoped lang="scss">
  .textContainer {
    margin-bottom: 2rem;
    .text {
      font-size: 1.1rem;
      margin: 0 0 .5rem;
      padding: 0 .5rem;
      font-weight: bold;
    }
    .inputBox {
      padding: 0 .5rem;
      &.active {
        border: 1px solid sandybrown;
      }
      input {
        width: 100%;
      }
    }
  }
</style>
