<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>


<style lang="scss">
body {
  background-color: #f6f6f6;
  text-align: center;
  margin: 3rem;
}
button {
  border-style: groove;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
h1 {
    margin: 3rem 0;
    color: seagreen;
}
a {
  text-decoration: none;
}
.inputBox {
  background: #fff;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  input {
    outline: none;
    border-style: none;
    font-size: 1.1rem;
  }
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
