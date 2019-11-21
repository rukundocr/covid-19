<template>
  <div class="about container">
    <router-link to="/">BACK</router-link>
   <h1 class="pahe-header">ABOUT</h1>
   <p>This is a Customer Manager app created with Vuejs Framework </p>
   <p>Author: RUKUNDO Jean Cluade</p>
    <p>Version : 1.0.0</p>
 
  <div class="container-fluid bg-1 text-center">
  <h3>Who Am I?</h3>
  <img src="../assets/claude.jpg" class="img-circle" alt="Bird">
  <h3>I'm an a Serious Web Developper</h3>
   <img src="../assets/claude.jpg" class="img-circle" alt="Bird">
  <h3>I'm an a Serious Web Developper</h3>
</div>

<div class="container-fluid bg-2 text-center">
  <h3>What Am I?</h3>
  <p>I Actually a web developper with a passion of creating my own products</p>
</div>

<div class="container-fluid bg-3 text-center">
  <h3>Where To Find Me?</h3>
  <p>rukundocr@gmail.com</p>
</div>
</div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

</style>