<template>
    <div class="inputBox shadow">
        <input
            type="text"
            v-model="name"
            :readonly="!this.$store.state.isSuccess"
            @keyup.enter="start"
            placeholder="사용자 이름 입력"
        />
        <span class="startContainer" @click="start">
            <i class="fas fa-play btnStart"></i>
        </span>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    data() {
      return {
        name: ''
      }
    },
    computed: {
      ...mapState([
        'user',
        'isSuccess',
        'rank'
      ])
    },
    methods: {
      ...mapActions([
        'startTyping'
      ]),
      ...mapMutations([
        'startTimer'
      ]),
      start() {
        if(this.checkDuplicatedName(this.name)) {
          alert('이미 등록된 이름입니다.')
        } else {
          this.$store.dispatch('startTyping', this.name);
          this.$store.commit('startTimer');
        }
      },
      checkDuplicatedName(name) {
        return this.rank.some(user => user.user === name);
      }
    },
    updated() {
      if(this.isSuccess && this.user) this.name = '';
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
