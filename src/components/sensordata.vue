<template>
  <div class="customers container ">
    <alert v-if="alert" v-bind:message = "alert"/>
 <h1 class="page-header text-primary" >IOT BASED SMART IRRIGATION <span class="badge" style="float:right" >Total Entries:{{ size }}</span></h1>
 <h3 class="page-header text-danger" >LIVE DATA FROM FIELD </h3>
 <div>
   <label class="text-primary">Search</label>
 <input class="form-control" placeholder="Enter Last Name" v-model="filterInput">
 </div>
 
    <br />
   <table class="table table-striped">
        <thead> 
          <tr>
            <th class="text-primary">NO</th>
            <th class="text-primary"> MOISTURE</th>
            <th class="text-primary"> TEMPERATURE</th>
            <th class="text-primary"> HUMIDITY</th>
            <th class="text-primary"> PUMP STATUS</th>
            <th class="text-primary"> UPDATED</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for= "(customer,index) in filterBy(customers,filterInput)" v-bind:key="customer._id">
            <td> {{ index +1 }} </td>
              <td> {{ customer.moisture }} </td>
                <td> {{ customer.temp}} </td>
                 <td> {{ customer.humidity }} </td>
                  <td> {{ customer.pump_status }} </td>
                 <td> {{ customer.updated }} </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>

import alert from "./alert";
export default {
  name: 'sensordata',
  data () {
    return {
      customers:[],
      alert : '',
      filterInput:'',
      size:'',
    }
  },
  methods:{
    fetchCustomers(){
      this.$http.get('https://vsmagri.herokuapp.com/getall/')
      .then(function(response){
        this.customers = (response.body)
        this.size= this.customers.length;
      });
    },
    
    deletecustomer(_id){
 this.$http.delete('https://vcustomer.herokuapp.com/employee/'+_id)
          .then(function(response){
           this.$router.push({path:'/',query:{alert:"Customer Deleted Successfully"}});
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
<style >
.bg-1 {
    background-color: #1abc9c; /* Green */
    color: #ffffff;
  }
  .bg-2 {
    background-color: #474e5d; /* Dark Blue */
    color: #ffffff;
  }
  .bg-3 {
    background-color: #ffffff; /* White */
    color: #555555;
  }
  img{
    width: 200px;

  }
 

</style>
