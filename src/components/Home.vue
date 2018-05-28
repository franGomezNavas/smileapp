<template>
	<div class="container-fluid hero-image">
    <div class="row justify-content-md-center home">
      <div class="col-10 col-sm-9 col-md-9 logo">
        <img src="src/assets/inconSmile%21.png" id="foto">
        <h3>TODAS LAS FOTOS DEL DÍA DE TU BODA EN UN ÚNICO ÁLBUM</h3>
        <br>
        <h2>CREA TU ÁLBUM</h2>

        <b-btn @click="" variant="info" class="m-1 btn">
          <router-link :to="{'name':'novio'}">
            CREA TU ÁLBUM
          </router-link>
        </b-btn>
      </div>
     
      <div class="col-10 col-sm-9 col-md-9 mt-4">
        <br>
        <h3>¿ YA TIENES TUS FOTOS LISTAS PARA SUBIR ? </h3>
        <br>
       <h2>¡ SÚBELAS !</h2>
       <div class="z-depth-2">
         <b-btn @click="" variant="info" class="m-1 btn shadow">
          <router-link :to="{'name':'invitado'}">
            SUBIR
          </router-link>
        </b-btn>
       </div> 
        
      </div>
    </div>


  </div>

</template>

<style scoped>
  .hero-image {
    background-image: url("../assets/bgHome.jpg");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    padding: 80px;
  }

   .home {
    margin-bottom:200px !important;
   }

   .container-fluid{
    text-align: center;
    padding: 0;
    margin:0;
    }
   
    h1, h2, h3 {
      font-weight: 500;
    }
    h3 {
      font-weight: 700;
      font-size: 24px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: #fff;
      font-weight: 700
    }
    .logo {
      margin-top: 50px;
    }

    #foto{
      width: auto;
      height: 150px;
      margin: 40px 0; 
    }

    .btn{
      background-color: #66CCBE !important;
      border-color: #66CCBE !important;
    }

    .btn:hover {
        background-color: #33998b !important;
        border-color: #33998b !important;
      }
    a:hover{
      color: #fff !important;
    }
    .row{
      /*margin:10px;*/
    }
</style>

<script>
	export default {
	    name: 'Home',
	  }

</script>
