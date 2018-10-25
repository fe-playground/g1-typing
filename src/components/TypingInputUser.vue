<template>
    <div class="inputBox shadow">
        <input
            type="text"
            id="user"
            v-model="user"
            :readonly="isStart"
            @keyup.enter="start"
            placeholder="사용자 이름 입력"
        />
        <span class="startContainer" @click="start">
            <i class="fas fa-play btnStart"></i>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        startTyping: Function,
        startTimer: Function,
        isSuccess: Boolean
    },
    data() {
        return {
            user: '',
            isStart: false
        }
    },
    methods: {
        start() {
            this.startTyping(this.user);
            this.startTimer();
        }
    },
    watch: {
        isSuccess() {
            if(this.isSuccess) this.user = '';
        }
    }
}
</script>

<style scoped lang="scss">
.inputBox {
    width: 300px;
    margin: 0 auto;
    input {
        width: calc(100% - 100px);
        text-align: center;
    }
}
.startContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.btnStart {
    color: #fff;
    vertical-align: middle;
}
</style>
