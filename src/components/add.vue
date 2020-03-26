<template>
  <div class="add container">
      <router-link to="/">BACK</router-link>
      <alert v-if="alert" v-bind:message="alert"/>
   <h1 class="pahe-header text-primary"><i class="fa fa-user fa-2x" aria-hidden="true"></i> ADD CUSTOMER</h1>
   <form v-on:submit="addCustomer">
        <div class="well">
            <h4 class="text-primary">Customer Info</h4>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" placeholder="First Name" v-model="customer.firstname" autocomplete="false">
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name" v-model="customer.lastname">
            </div>
        </div>
        <div class="well">
            <h4 class="text-primary">Customer Contact</h4>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" placeholder="Email" v-model="customer.email">
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" placeholder="Phone" v-model="customer.phone">
            </div>
        </div>

        <div class="well">
            <h4 class="text-primary">Customer Location</h4>
            <div class="form-group">
                <label>Address</label>
                <input type="text" class="form-control" placeholder="Address" v-model="customer.address">
            </div>
            <div class="form-group">
                <label>City</label>
                <input type="text" class="form-control" placeholder="City" v-model="customer.city">
            </div>
            <div class="form-group">
                <label>State</label>
                <input type="text" class="form-control" placeholder="State" v-model="customer.state">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import alert from "./alert"
export default {
  name: 'add',
  data () {
    return {
      customer:{},
      alert: ''
    }
  },
  methods:{
      addCustomer(e){
       e.preventDefault();
       if(!this.customer.firstname || !this.customer.lastname || !this.customer.email){
      this.alert = 'please fill in all field';
      }
      else{
          let newcustomer ={
              firstname:this.customer.firstname,
              lastname: this.customer.lastname,
              email:this.customer.email,
              phone:this.customer.phone,
              address:this.customer.address,
              city:this.customer.city,
              state:this.customer.state
          }
          this.$http.post('https://vcustomer.herokuapp.com/employee',newcustomer)
          .then(function(response){
              this.$router.push({path:'/',query:{alert:"Customer added Successfully"}});
          });
          e.preventDefault(); 
      }
      e.preventDefault(); 
      }
     
  
  },
  components:{
      alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>