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
        :readonly="isComplete"
        ref="input"
      />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    text: String,
    isActive: Boolean,
    complete: Function,
    activeIdx: Number
  },
  data() {
    return {
      isComplete: false
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
  updated() {
    if(this.isActive) this.$refs.input.focus();
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
        border-color: sandybrown;
      }
      input {
        width: 100%;
      }
    }
  }
</style>
