<template>
    <div class="typingRank">
        <h2>RANKING</h2>
        <ul>
            <li
                v-for="(user, index) in rank"
                :key="index">
                {{ index+1 }} {{ user.user }} {{ user.time | hhmmss }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState([
            'rank'
        ])
    }

}
</script>

<style scoped lang="scss">
li{
    &:nth-child(1) {
        color:goldenrod;
    }
    &:nth-child(2) {
        color:darkgray;
    }
    &:nth-child(3) {
        color:brown;
    }
}
</style>
