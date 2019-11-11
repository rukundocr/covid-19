<template>
  <div class="customers container ">
    <alert v-if="alert" v-bind:message = "alert"/>
 <h1 class="page-header text-primary" >Manage Customers</h1>
 <input class="form-control" placeholder="Enter Last Name" v-model="filterInput">
    <br />
   <table class="table table-striped">
        <thead> 
          <tr>
            <th class="text-primary">First Name</th>
            <th class="text-primary">Last Name</th>
            <th class="text-primary">Email</th>
            <th class="text-primary">Phone</th>
             <th class="text-primary">Adresss</th>
            <th class="text-primary">City</th>
            <th class="text-primary">State</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for= "customer in filterBy(customers,filterInput)" v-bind:key="customer._id">
               <td> {{ customer.firstname }} </td>
                <td> {{ customer.lastname }} </td>
                 <td> {{ customer.email }} </td>
                  <td> {{ customer.phone }} </td>
                  <td> {{ customer.address }} </td>
                <td> {{ customer.city }} </td>
                 <td> {{ customer.state }} </td>
                  <td> <router-link class="btn btn-primary" v-bind:to="'/customer/'+ customer._id">View</router-link></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import alert from "./alert";
export default {
  name: 'customers',
  data () {
    return {
      customers:[],
      alert : '',
      filterInput:''
    }
  },
  methods:{
    fetchCustomers(){
      this.$http.get('http://localhost:3000/employee/')
      .then(function(response){
        this.customers = (response.body)

      });
    },
    
    filterBy(list,value){
      value = value.charAt(0).toUpperCase() + value.slice(1);
      return list.filter(function(customer){
        return customer.lastname.indexOf(value) > -1;
      })
    }
    
    },
    created:function(){
      if(this.$route.query.alert){
        this.alert = this.$route.query.alert;
      }
      this.fetchCustomers();
  },
 // updated:function(){
     // this.fetchCustomers();
  
  components:{
    alert
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
