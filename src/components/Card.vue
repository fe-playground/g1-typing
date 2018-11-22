<template>
    <div>
        상품 상세정보
        <div v-if="loading">상품정보 가져오는 중 ...</div>
        <div v-else>상품 id: {{ cardId }}</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      cardId: 0,
      loading: false
    };
  },
  watch: {
    $route: {
      handler: "fetchData",
      immediate: true
    }
  },
  methods: {
    fetchData() {
      this.loading = true;
      // cardId로 상품 상세정보 API 호출
      setTimeout(() => {
        this.cardId = this.$route.params.cardId;
        this.loading = false;
      }, 500);
    }
  }
};
</script>

<style>
</style>
