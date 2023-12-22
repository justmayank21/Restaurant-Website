<template>
  <router-view />
</template>

<script>
// import signUp from './components/signUp.vue'
export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body{
  padding: 0;
  margin: 0;
}

h1{
  margin: -10px;
}

.logo{
  width: 100px;
}

.register, .login{
  margin-top: 30px;
}

.register input, .login input, .add input{
  width: 300px;
  height: 40px;
  display: block;
  padding-left: 10px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
}
.register button, .login button, .add button{
    width: 320px;
    height: 40px;
    border: 1px solid;
    cursor: pointer;
    background-color: cadetblue;
    color: white;
}
</style>
