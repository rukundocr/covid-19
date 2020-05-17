<template>
  <div class="add container">
    <router-view></router-view>
        <!-- set progressbar -->
        <vue-progress-bar></vue-progress-bar>

        <div class="row">
          <div class="col-12 col-md-6">
             
         <div class="card" >
        <div class="card-header primary">
         <h3 class="text-primary" >Global Covid19 Status</h3>
         </div>
  <ul class="card list-group list-group-flush">
    <li class="list-group-item text-primary">Positive Cases:<span class="badge badge-warning ">{{global.cases}}</span></li>
    <li class="list-group-item text-primary">Total Deaths: <span class="badge badge-danger">{{global.deaths}}</span></li>
    <li class="list-group-item text-primary">Recovered: <span class="badge badge-success">{{global.recovered}}</span></li>
  </ul>
</div>
          </div>
          <div class="col-12 col-md-6" >
        <div>
     <label>SELECT COUNTRY TO SEE CURRENT DATA</label>
    <form v-on:submit="search" id="district">
   <select v-model="selected" class="form-control" >
   <option v-for="country in countries"  v-bind:key="country.id"> {{country}} </option>
  
</select>
<br>
<input type="submit" value="submit" class="form-control btn btn-primary btn-block" >

 </form>
        </div>
 
      <div class="card" v-show="toggle">
    <div class="card-header">
    Country :<span class="badge badge-primary"> {{corona.country}}</span>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-primary">Positive Cases<span class="badge badge-warning">{{corona.cases}} </span></li>
    <li class="list-group-item text-primary">Deaths<span class="badge badge-danger">{{corona.deaths}} </span></li>
    <li class="list-group-item text-primary">Recovered<span class="badge badge-success">{{corona.recovered}} </span></li>
    <li class="list-group-item text-primary">Today's Cases<span class="badge badge-primary">{{corona.todayCases}} </span></li>
     
            <li class="list-group-item text-primary">Doday Deaths: <span class="badge badge-danger">{{corona.todayDeaths}}</span></li>
           
            <li class="list-group-item text-primary">Active Cases: <span class="badge badge-primary">{{corona.active}}</span></li>
            <li class="list-group-item text-primary">Critical Cases: <span class="badge badge-danger">{{corona.critical}}</span></li>
            <li class="list-group-item text-primary"> Cases per One Million: <span class="badge badge-primary">{{corona.casesPerOneMillion}}</span></li>
            <li class="list-group-item text-primary">Deaths Per One Million: <span class="badge badge-primary">{{corona.deathsPerOneMillion}}</span></li>
  </ul>
</div>
          </div>
        </div>
              <br> 
    <div class="row">
          <div class="col-12 col-md-12">
         
  <div class="container-fluid  text-center">
    <h3 class="dark">Developper: Rukundo Jean Claude </h3>
  <img src="../assets/claude.jpg" class="img-circle img-fluid "  alt="Bird">
  <h3>I'm a Web Developper</h3>
</div>

<div class="container-fluid bg-2 text-center">
   <p>I am Actually a Full Stack Javascript frameworks developper || Nodejs|| Expressa MongoDB for Backend </p>
  <p> Vuejs for frontend  </p>
</div>

<div class="container-fluid bg-3 text-center">
  <h3 class="text-success">Where To Find Me?</h3>
  <p class="text-primary"><i class="fa fa-envelope-square fa-2x" aria-hidden="true"></i><span> <a href="mailto:rukundocr@gmail.com">rukundocr@gmail.com</a></span></p>
  <p class="text-primary"><i class="fa fa-phone fa-2x" aria-hidden="true"></i><span> <a href="tel:0783289997">+250783289997 </a></span></p>
  <p class="text-primary"><i class="fa fa-pencil fa-2x" aria-hidden="true"></i>IPRC NGOMA </p>
  </div>
   </div>
  </div>
      </div>
           
 
</template>

<script>
import axios from "axios"
export default {
  name: 'district',
  data () {
    return {
      selected:{},
      corona :{},
      error:'',
      global:{},
      toggle:false,
      countries:[
  "Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia ",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory ",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands",
	"Central African Republic",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands",
	"Colombia",
	"Comoros",
	"Congo",
	"Cook Islands ",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia",
	"Moldova",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan (Province of China)",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"UAE",
	"UK",
	"USA",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela",
	"Viet Nam",
	"British Virgin Islands",
	"Virgin Islands",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",

      ],
      
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]

    }
  },
  methods:{
  //-----------------------
  countriesf(){
    this.$Progress.start()
      axios.get('https://coronavirus-19-api.herokuapp.com/all')
      .then(response =>{
          this.$Progress.finish()
        this.global = response.data
        console.log(response.data)
      })
    },
  search(e){
      let newsearch = {
        selected:this.selected
      }
       this.$Progress.start()
      axios.get('https://coronavirus-19-api.herokuapp.com/countries/'+ newsearch.selected)
          .then((response)=>{
            this.$Progress.finish()
           // console.log(response.data)
            this.corona = response.data
            this.toggle=true;
            
          })
          .catch((error)=>{
            this.$Progress.fail()
            if(error.response){
            this.error = (error.response.data);}
          })
      e.preventDefault(); 
      
      }
    
  },
   created:function(){
    
      this.countriesf();
  },
  componets:{
    axios
  }
  

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>