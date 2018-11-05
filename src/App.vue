<template>
  <div>
    <ul class="nav">
      <li><router-link to="/">Typing</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

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
.nav {
  width: 100%;
  text-align: right;
  li {
    display: inline-block;
    font-weight: bold;
    &:not(:last-child):after {
      content: '|';
      padding: 0 0.2rem;
    }
    a {
      color: inherit;
    }
  }
  &:after {
    content: '';
    clear: both;
    display: table;
  }
}
</style>
