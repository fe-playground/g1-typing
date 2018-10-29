<template>
    <div class="typingTimer">
        <strong>{{ this.$store.state.time | hhmmss }}</strong>
    </div>
</template>

<style scoped lang="scss">
.typingTimer {
    margin: 2rem 0;
    text-align: right;
    font-size: 1.2rem;
}
</style>
