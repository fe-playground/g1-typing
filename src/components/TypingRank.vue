<template>
    <div class="typingRank">
        <h2>RANKING</h2>
        <ul>
            <li
                v-for="(user, index) in rank"
                :key="index">
                {{ index+1 }} {{ user.user }} {{ user.time|hhmmss }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        rank: {
            type: Array
        }
    }
}
</script>

<style scoped lang="scss">

</style>
