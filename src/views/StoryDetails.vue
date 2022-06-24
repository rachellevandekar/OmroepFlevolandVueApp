<template>




  <form>
        <h1>{{$route.params.title}}</h1>
        <label>Titel</label>
      <div>  {{$route.params.title}}</div>

        <label>Story</label>
       
        <div>{{$route.params.details}}</div>

        <label>Media</label><br>
        <img src="../assets/kabinetStory.jpg" alt="">

        


    </form>



</template>

<script>
export default{
    props: ['id', 'title', 'details'],
    data() {
        return {
            id: this.$route.params.id,
            title: this.$route.params.title,
            details: this.$route.params.details,
            img: this.$route.params.img
            
        }
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

img{
    margin-top: 1%;
    width: 40vw;
}
</style>
