<template>
  <img class="logo" src="../assets/restro.png" alt="restro-logo" />
  <h1>Login</h1>
  <div class="register">
    <input type="text" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="password" />
    <button @click="login">Login</button>
    <p>
      <router-link to="/sign-up">SignUp</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "LoginPage",
  data()
  {
    return{
        email:'',
        password:''
    }
  },
  methods:{
    async login(){
        let result = await axios.get(
            `http://localhost:3000/user?email=${this.email}&password=${this.password}`
        );
       console.warn(result)
       if(result.status==200 && result.data.length>0)
      {
        localStorage.setItem("user-Info",JSON.stringify(result.data[0]))
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
