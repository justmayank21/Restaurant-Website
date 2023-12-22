<template>
    <Header />
    <h1>Hi {{name}}, Update The Restaurant</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Restaurant Name" v-model="restaurant.name">
        <input type="text" name="contact" placeholder="Enter Contact Detail" v-model="restaurant.contact">
        <input type="text" name="address" placeholder="Enter Address Detail" v-model="restaurant.address">
        <button type="button" @click="updateRestaurant">Update New Restaurant</button>
    </form>   

</template>

<script>
/* eslint-disable */
import Header from './Header.vue'
import axios from 'axios'
export default{
  name:'Update',

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

  components:{
    Header
  },

  methods:{
    async updateRestaurant(){
        console.warn(this.restaurant)
        const result= await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
            name:this.restaurant.name,
            contact:this.restaurant.contact,
            address:this.restaurant.address
        });
        console.log(result);
        if(result.status==200)
      {
        this.$router.push({name:'HomePage'})
      }
    }

  },

async mounted()
  {
    let user = localStorage.getItem("user-Info");
    this.name=JSON.parse(user).name;
    if(!user)
    {
      this.$router.push({name:'signUp'})
    }
    // console.warn(this.$route.params.id)
    let result= await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id)
    this.restaurant= result.data
}
}

</script>