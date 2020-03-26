<template>
   
  <div class="customerdetail container">
    <router-link to="/">BACK</router-link>
      <h1 class="pahe-header">{{customer.firstname}} {{customer.lastname}} 
      <span class="pull-right"><router-link class="btn btn-primary" v-bind:to="'/edit/'+ customer._id">Edit</router-link></span>
      <span class="pull-right" ><button class="btn btn-danger" v-on:click="deletecustomer(customer._id)">Delete</button></span>
   </h1>
    <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span> {{customer.phone}}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> {{customer.email}}</li>
        </ul>
          
        <ul class="list-group">
            <li class="list-group-item"> {{customer.address}}</li>
            <li class="list-group-item">{{customer.city}}</li>
            <li class="list-group-item">{{customer.state}}</li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'customerdetail',
  data () {
    return {
      customer :''
    }
  },
    methods:{
      fetchCustomer(id){
          this.$http.get('https://vcustomer.herokuapp.com/employee/'+id)
          .then(function(response){
            this.customer = response.body;
          });
},
deletecustomer(_id){
 this.$http.delete('https://vcustomer.herokuapp.com/employee/'+_id)
          .then(function(response){
           this.$router.push({path:'/',query:{alert:"Customer Deleted Successfully"}});
          });
}
 
},
created: function(){
      this.fetchCustomer(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>