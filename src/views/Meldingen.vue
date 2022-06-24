<template>
   <h1>Meldingen</h1>
        

<div v-for="melding in meldingen" :key="melding.id" class="stories">
  <router-link :to="{name: 'MeldingDetails', params: {id: melding.id}}">
    <h2>{{ melding.title }} </h2>

  </router-link>

</div>
  
</template>

<script>

export default {
  data() {
      return {
        meldingen: [
          {title: 'Johan vraagt om goedkeuring voor een story', id: 1, details: 'lorem'}
        ]
          
  }
 
}
 
}

</script>

<style>

h1{
    font-size: 1.4em;
}

h2{
  font-size: 18px;
}

.stories h2{
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.stories a{
  text-decoration: none;
}



button {
    background: #555;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;

}


</style>