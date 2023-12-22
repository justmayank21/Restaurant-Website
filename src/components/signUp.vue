<template>
  <img class="logo" src="../assets/restro.png" alt="restro-logo">
  <h1>Sign Up</h1>
  <div class="login">
    <input type="text" v-model="name" placeholder="Enter name" />
    <input type="text" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="password" />
    <button @click="signUp">Sign Up</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
  name: "signUp",
  data()
  {
    return {
      name:'',
      email:'',
      password:''
    }
  },
  methods:{
    async signUp()
    {
      let result =  await axios.post("http://localhost:3000/user",{
        name:this.name,
        email:this.email,
        password:this.password
      });

      console.log(result);
      if(result.status==201)
      {
        localStorage.setItem("user-Info",JSON.stringify(result.data))
        this.$router.push({name:'HomePage'})
      }
      
    }
  },
  mounted()
  {
    let user = localStorage.getItem("user-Info");
    if(user)
    {
      this.$router.push({name:'HomePage'})
    }

  }
};
</script>

<style>


</style>
