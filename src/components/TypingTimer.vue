<template>
    <div class="typingTimer">
        <strong>{{ time | hhmmss }}</strong>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState([
            'time'
        ])
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
