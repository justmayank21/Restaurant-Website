<template>
    <div>
      <Header />
      <h1>Hello {{ name }}, Welcome To the Home Page</h1>
  
      <div class="table-container">
        <table class="center-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in restaurant" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.contact }}</td>
              <td>{{ item.address }}</td>
              <td>
                <router-link :to="'/update/'+item.id" class="update-link">Update</router-link>
                <span class="button-gap"></span>
                <button @click="deleteRestaurant(item.id)" class="delete-button">Delete</button>
            </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default{
    name: 'HomePage',
    data(){
        return{
            name:'',
            restaurant:[],
        }
    },

    components:{
        Header
    },
    methods:{
       async deleteRestaurant(id){
        try {
        await axios.delete(`http://localhost:3000/restaurant/${id}`);
        this.restaurant = this.restaurant.filter(item => item.id !== id);
        // Alternatively, you can reload the data from the server after deletion:
        // this.fetchRestaurantData();
      } catch (error) {
        console.error('Error deleting restaurant:', error);
      }

    },
    async fetchRestaurantData() {
      try {
        let result = await axios.get("http://localhost:3000/restaurant");
        this.restaurant = result.data;
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    }
  },

    mounted()
  {
    let user = localStorage.getItem("user-Info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: 'signUp' });
    }
    this.fetchRestaurantData();
  }
}

</script>

<style>
@import "https://unpkg.com/open-props";
@use 'sass:color';
/* Your existing styles */
h1 {
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  font-size: 24px;
}

.center-table {
  margin: 0 auto;
  width: 80%;
  border-collapse: collapse;
  border: 2px solid #ddd;
}

th, td {
  padding: 12px;
  text-align: left;
  text-align: center;
}

td:last-child {
  width: 200px; /* Change the width as needed */
}

/* Adjust the width of the buttons if necessary */
.update-link,
.delete-button {
  width: auto; /* Set width as 'auto' for dynamic sizing */
  display: inline-block;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
  color: #333;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f2f2f2;
}

.table-container {
  overflow-x: auto;
}
.button-gap {
  display: inline-block;
  width: 0px; /* Adjust the gap width as needed */
}
.update-link {
  padding: 8px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: #27ae60; /* Set the initial color to green */
  border: 2px solid transparent; /* Add a transparent border initially */
  transition: border-color 0.3s ease; /* Transition for the border color */
  font: 700 1rem/1.2 Raleway, sans-serif;
  text-transform: uppercase;

  /* Rest of your styles */
}

.update-link:hover {
  border-color: #27ae60; /* Add border color on hover */
  color: #219a52; /* Change text color on hover */
}

/* Button styles */
.delete-button {
  padding: 8px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: #c0392b; /* Set the initial color to green */
  border: 2px solid transparent; /* Add a transparent border initially */
  transition: border-color 0.3s ease; /* Transition for the border color */
  font: 700 1rem/1.2 Raleway, sans-serif;
  text-transform: uppercase;

  /* Rest of your styles */
}

.delete-button:hover {
  border-color: #c0392b; /* Change border color on hover to red */
  color: #c0392b; /* Change text color on hover */
}
</style>