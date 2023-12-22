<template>
    <Header />
    <h1>Hi {{name}}, Add A Restaurant</h1> 
    <form class="add">
        <input type="text" name="name" placeholder="Enter Restaurant Name" v-model="restaurant.name">
        <input type="text" name="contact" placeholder="Enter Contact Detail" v-model="restaurant.contact">
        <input type="text" name="address" placeholder="Enter Address Detail" v-model="restaurant.address">
        <button type="button" @click="addRestaurant">Add New Restaurant</button>
    </form> 

</template>

<script>
/* eslint-disable */
import Header from './Header.vue'
import axios from 'axios'
export default{
  name:'Add',
  data(){
    return{
       name:'',
       restaurant:{
        name:'',
        contact:'',
        address:''

       } 
      
    }
  },
  methods:{
    async addRestaurant(){
        const result= await axios.post("http://localhost:3000/restaurant",{
            name:this.restaurant.name,
            contact:this.restaurant.contact,
            address:this.restaurant.address
        });
        console.log(result);
        if(result.status==201)
      {
        this.$router.push({name:'HomePage'})
      }

       

    }
  },
  components:{
    Header
  },
 mounted()
  {
    let user = localStorage.getItem("user-Info");
    this.name=JSON.parse(user).name;
    if(!user)
    {
      this.$router.push({name:'signUp'})
    }
}
}

</script>