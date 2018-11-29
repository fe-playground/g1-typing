<template>
  <ul class="nav">
    <li>
      <router-link to="/login">Login</router-link>
    </li>
    <li v-if="isAuth"><a href="" @click.prevent="logout">Logout</a></li>
    <li>
      <router-link to="/typing">Typing</router-link>
    </li>
    <li>
      <router-link to="/board">board</router-link>
    </li>
  </ul>
</template>

<script>
import { setAuthInHeader } from "@/api";
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuth"])
  },
  methods: {
    ...mapMutations(["logout"])
  }
};
</script>


<style scoped lang="scss">
.nav {
  width: 100%;
  text-align: right;
  li {
    display: inline-block;
    font-weight: bold;
    &:not(:last-child):after {
      content: "|";
      padding: 0 0.2rem;
    }
    a {
      color: inherit;
    }
  }
  &:after {
    content: "";
    clear: both;
    display: table;
  }
}
</style>
