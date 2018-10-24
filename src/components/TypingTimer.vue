<template>
    <div class="typingTimer">
        <strong>{{ time }}</strong>
    </div>
</template>

<script>
export default {
    props: {
        time: String
    }
}
</script>

<style scoped lang="scss">
.typingTimer {
    margin: 2rem 0;
    text-align: right;
    font-size: 1.2rem;
}
</style>
