<template>
  <nav>
    <button id="back-btn" @click="back"> 🡠 </button>
    <router-link to="/">Stories</router-link> |
    <router-link to="/meldingen">Meldingen</router-link>

  </nav>

  
  <router-view/>
</template>

<script>
export default {
  methods: {
    back(){
      this.$router.go(-1)
    }
  }
 
}
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

}

nav a.router-link-exact-active {
  color: #42b983;
}

#back-btn{
  background:none;
  color: black ;
  
}

#back-btn:hover{
  background:none;
  color: green ;
  
}
</style>
