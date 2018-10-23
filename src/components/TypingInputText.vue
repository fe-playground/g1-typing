<template>
  <li>
    <div>{{ text }}</div>
    <input
      type="text"
      placeholder="위 문장을 입력하세요"
      @keyup="typing"
      :readonly="isComplete"
      ref="input"
    />
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

<style>

</style>
