<template>
   <h1>Mijn stories</h1>
        

<router-link :to="{name: 'NewStory'}">
  <button>Nieuwe story</button>
</router-link>

<div v-for="story in stories" :key="story.id" class="stories">
  <router-link :to="{name: 'StoryDetails', params: {id: story.id, title: story.title, details: story.details, img: story.img}}">
    <h2>{{ story.title }} </h2>
    

  </router-link>

</div>
  
</template>

<script>

export default {
  data() {
      return {
        stories: [
          {title: localStorage.getItem('title'), id:2, details: localStorage.getItem('story')},
          {title: 'Kabinet en provincie moeten bereikbaarheid verbeteren ', id: 1, img: require("@/assets/kabinetStory.jpg") ,details: 'Het kabinet moet uiterlijk dit najaar met een plan komen om de provincie Flevoland beter bereikbaar te maken. Een motie van de VVD in de Tweede Kamer hierover is dinsdag aangenomen. De VVD wil dat de regering en de provincie aangeven hoe en wanneer zij de A6, de N50/N307 Lelystad-Zwolle, de N307 Lelystad-Enkhuizen en de IJmeerverbinding verder gaan ontwikkelen, inclusief een plan voor een brugverbinding. De indieners van de motie zeggen dat er nieuwe infrastructuur nodig is om de provincie bereikbaar te houden, nu duidelijk is dat daar 130.000 nieuwe woningen moeten komen. Hoewel er allerlei plannen zijn voor het ontwikkelen van de wegen en verbindingen, is niet duidelijk genoeg wanneer die uitgevoerd worden.Ook een motie van het CDA en de VVD om Europese subsidie aan te vragen voor de Lelylijn is aangenomen.'}
          
         
        ]
       
          
  };
  

 
}
 
}

</script>

<style>

h1{
    font-size: 1.4em;
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