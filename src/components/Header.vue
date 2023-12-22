<template>
    <div class="nav">
      <div class="nav-left">
        <span>Fradel And Spies</span>
      </div>
      <div class="nav-right">
        <router-link to="/">Home</router-link>
        <router-link to="add">Add Restaurant</router-link>
        <a href="#" @click="logout">Logout</a> 
      </div>
    </div>
  </template>
  
  <script>
  /* eslint-disable vue/multi-word-component-names */
  export default {
    name: 'Header',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'LoginPage'})

        }
    }
  };
  </script>
  
  <style>
  .nav {
    margin-bottom: 2rem;
    background-color: black;
    overflow: hidden;
    display: flex;
    justify-content: space-between; /* Aligns items on both sides */
    padding: 4px 20px; /* Adjust padding as needed */
  }
  
  .nav-left {
    display: flex;
    align-items: center;
    color: white;
    font-size: 30px;
  }
  
  .nav-right {
    display: flex;
  }
  
  .nav a {
    padding: 20px 20px;
    color: azure;
    text-decoration: none;
    text-align: center;
    font-size: 17px;
    margin-right: 5px;
    transition: color 0.3s, background-color 0.3s, transform 0.3s;
  }
  
  .nav a:hover {
    background-image: linear-gradient(to bottom, #333 0%, #333 100%);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
  </style>
  
















  /* eslint-disable vue/multi-word-component-names */