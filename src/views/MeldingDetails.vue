<template>
  <form>
        <h1>Kabinet en provincie moeten bereikbaarheid verbeteren </h1>
        <label>Titel</label>
         <textarea name="story" id="titel" cols="30" rows="10" class="titel" >Kabinet en provincie moeten bereikbaarheid verbeteren
        </textarea>

        <label>Story</label>
        <textarea name="story" id="story" cols="30" rows="10" class="story-veld" >Het kabinet moet uiterlijk dit najaar met een plan komen om de provincie Flevoland beter bereikbaar te maken. Een motie van de VVD in de Tweede Kamer hierover is dinsdag aangenomen.

De VVD wil dat de regering en de provincie aangeven hoe en wanneer zij de A6, de N50/N307 Lelystad-Zwolle, de N307 Lelystad-Enkhuizen en de IJmeerverbinding verder gaan ontwikkelen, inclusief een plan voor een brugverbinding. 

De indieners van de motie zeggen dat er nieuwe infrastructuur nodig is om de provincie bereikbaar te houden, nu duidelijk is dat daar 130.000 nieuwe woningen moeten komen. Hoewel er allerlei plannen zijn voor het ontwikkelen van de wegen en verbindingen, is niet duidelijk genoeg wanneer die uitgevoerd worden.
        
Ook een motie van het CDA en de VVD om Europese subsidie aan te vragen voor de Lelylijn is aangenomen.
        </textarea>

        <label>Media</label><br>
        <img src="../assets/kabinetStory.jpg" alt="">

       

        <div class="save" id="app">
            <button  @click="showModal = true">Afkeuren</button>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
            <div class="modal" v-if="showModal">
                 <h1>Story nog niet goed?</h1>
                 <label>Opmerking:</label>
                 <textarea type="text" required></textarea>
                  
                  <button  @click="showModal = false"> Verzenden</button>
            </div>


            <button  @click="showModalGoed = true">Goedkeuren</button>
            <div class="modal-overlay" v-if="showModalGoed" @click="showModalGoed = false"></div>
            <div class="modal-goed" v-if="showModalGoed">
                 <h1>Story goedkeuren?</h1>
                
                 <label>Opmerking:</label>
                 <textarea type="text" required></textarea>
                  
                  <button  @click="showModalGoed = false"> Verzenden</button>
            </div>
        </div>
        
      

    </form>



</template>

<script>

 export default{
 data () {
  return {
   showModal: false,
   showModalGoed: false
  }
 }
 }
//import Notification from '@/components/Notification.vue'
//import {ref} from 'vue'
//export default{
    
    //components:{
   //     Notification,
   // },
   /* setup (){
        const modalActive = ref(false);

        const toggleModal = () => {
            modalActive.value = !modalActive.value;
        }

        return {modalActive, toggleModal}
    }
*/
   
//}
</script>


<style>

form{
    
    height: 100vh;
    margin: auto;
    background: white;
    text-align: left;
    padding: 25px;

   
}
h1{
    font-size: 1.4em;
}

label{
    color: #aaa;
    display: inline-block;
    margin: 16px 0 16px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input, textarea{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    color: #555;
     font:inherit;
     resize: none;
}


.story-veld{
  padding: 10px 6px;
    line-break: auto;
    max-width: 100%;
   
}


.titel{
    height: 6vh;
    line-break: auto;
    font:inherit;
    max-width: 100%;
    

}



button {
    background: #555;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
   

}

.save{
    text-align: center;
}


img{
    margin-top: 1%;
    width: 40vw;
}


.modal-overlay {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 98;
 background-color: rgba(0, 0, 0, 0.3);
 height: 100%;
 
}

.modal {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 99;
 
 width: 100%;
 max-width: 400px;
 background-color: #FFF;
 border-radius: 16px;
 
 padding: 25px;
 

}

.modal-goed {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 99;
 
 width: 100%;
 max-width: 400px;
 background-color: #FFF;
 border-radius: 16px;
 
 padding: 25px;
 

}



</style>