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
            
            <th class="text-primary"> COUNTRY</th>
            <th class="text-primary"> CASES</th>
            <th class="text-primary"> Today cASES</th>
            <th class="text-primary"> DEATHS</th>
            <th class="text-primary"> TODAY DEATHS</th>
            <th class="text-primary"> RECOVERED</th>
            <th class="text-primary"> ACTIVE CASES</th>
            <th class="text-primary"> CRITICAL</th>
            <th class="text-primary"> CASES PER ONE MILLION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for= "customer in customers" v-bind:key="customer.country">
          
              <td> {{ customer.country }} </td>
                <td> {{ customer.cases}} </td>
                 <td> {{ customer.todaycases }} </td>
                  <td> {{ customer.deaths }} </td>
                 <td> {{ customer.todayDeaths }} </td>
                 <td> {{ customer.recovered}} </td>
                 <td> {{ customer.active}} </td>
                  <td> {{ customer.critical }} </td>
                 <td> {{ customer.casesPerOneMillion }} </td>
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
      time:'',
    
    }
  },
  methods:{
    fetchCustomers(){
      this.$http.get('https://coronavirus-19-api.herokuapp.com/countries/')
      .then(function(response){
        console.log(response.body)
        response.body.forEach((user)=>{
        this.customers = user;
         console.log(this.customers);
        })
        
      });
    },
    
    
    deletecustomer(_id){
 this.$http.delete('https://vcustomer.herokuapp.com/employee/'+_id)
          .then(function(response){
           this.$router.push({path:'/',query:{alert:"Customer Deleted Successfully"}});
          });
},
    
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
