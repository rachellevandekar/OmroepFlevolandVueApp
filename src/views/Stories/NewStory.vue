<template>

    <form @submit.prevent="handleSave">
        <h1>Nieuwe story</h1>
        <label>Titel</label>
        <input type="titel" required v-model="titel" id="titel">

        <label>Story</label>
        <textarea name="story" id="story" cols="30" rows="10" class="story-veld" v-model="story"></textarea>

        <label>Media</label>
        <input type="file" class="media-btn" @change="onFileSelected" hidden >

        <div class="save" id="message">
            <button @click='toggle =!toggle'>Opslaan</button><br> <br>
            
            <div v-show='toggle'>Story is opgeslagen!</div>
        </div>

    </form>

  
</template>

<script>


export default {
    
     el:'#message',
    data(){ 
        return {
            toggle: true
        }
    },
    
     data() {
      return {
          titel: '',
          story: '',
          selectedFile: null
        
      }

      
  },
   methods: {
       onFileSelected(event){
           this.selectedFile = event.target.files[0]
       },
    handleSave(){
        console.log('saved')
        localStorage.setItem("title", this.titel)
        localStorage.setItem("story", this.story)        
       
    },
    
}

 
}

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
}


.story-veld{
    min-height: 40vh;
    line-break: auto;
    font:inherit;
    max-width: 100%;
    

}

input[type=file]::file-selector-button{
  
    background: rgb(172, 172, 172);
    border: 0;
    padding: 10px 20px;
    color: white;
    border-radius: 20px;

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


</style>