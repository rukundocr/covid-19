<template>
  <div class="about container">
    <router-link to="/">BACK</router-link>
   <h1 class="page-header text-primary" >ABOUT</h1>
   <h2 class="text-danger">This is a Customer Manager app created with Vuejs Framework </h2>
   <h2 class="text-danger">Backend is Built With nodejs,Express and Mongodb hosted on heroku </h2>
   <p class="text-primary">Author: RUKUNDO Jean Cluade</p>
    <p class="text-primary">Version : 1.0.0</p>
    <p>Git repo for forntend <a href="https://github.com/rukundocr/Vmanager" target="_blank">frontend</a><br/>
    <p>Git repo for backend  <a href="https://github.com/rukundocr/nodemongo_API" target="_blank">backend</a><br />
    
  <div class="container-fluid bg-1 text-center">
  <h3>Who Am I?</h3>
  <img src="../assets/claude.jpg" class="img-circle" alt="Bird">
  <h3>I'm a Web Developper</h3>
</div>

<div class="container-fluid bg-2 text-center">
  <h3>What Am I?</h3>
  <p>I Actually a web developper with a passion of creating my own products</p>
</div>

<div class="container-fluid bg-3 text-center">
  <h3>Where To Find Me?</h3>
  <p class="text-primary"><i class="fa fa-envelope-square fa-2x" aria-hidden="true"></i> rukundocr@gmail.com</p>
  <p class="text-primary"><i class="fa fa-phone fa-2x" aria-hidden="true"></i>+250783289997</p>
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

