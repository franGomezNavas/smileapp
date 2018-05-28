<template>
	
	<div class="container">
		<h1>Crea tu álbum de bodas</h1>
		<b-container fluid>
		  <b-row class="my-1">
		    <b-col sm="3">
		    	<label for="input-small">Tu nombre</label>
		    </b-col>
		    <b-col sm="6">
		      <b-form-input 
		      	id="input-small" 
		      	size="sm" 
		      	type="text" 
		      	placeholder="Enter your name" 
		      	v-model="newAlbum.nameOne">
		      </b-form-input>
		    </b-col>
		  </b-row>

		  <b-row class="my-1">
		    <b-col sm="3">
		    	<label for="input-small">El de tu pareja</label>
		    </b-col>
		    <b-col sm="6">
		      <b-form-input 
		      	id="input-small" 
		      	size="sm" 
		      	type="text" 
		      	placeholder="Enter name" 
		      	v-model="newAlbum.nameTwo">
		      </b-form-input>
		    </b-col>
		  </b-row>
			
			<b-row class="my-1">
				<b-col sm="3">
					<label for="example-date-input">Fecha de la boda</label>
				</b-col>
				 <b-col sm="6"> 	
				 	<input 
				 		class="form-control" 
				 		type="date" 
				 		value="" 
				 		id="input"
				 		v-model="newAlbum.date">
				</b-col>
			</b-row>

      <button 
      	:disabled="sending" 
      	class="btn btn-info" 
      	type="button" 
      	@click="createAlbum()">
                Crear nuevo Álbum
      </button>

  <!--   </b-btn> -->
		</b-container>

		<div v-if="successMsg !== ''" class="login-success-msg">
			<span>{{ successMsg }}</span>
			<br>
		    <button
		    	class="btn btn-info" 
		  		type="button"
		  		> 
		  		<router-link :to="{'name':'invitado'}">
		        SUBIR TUS FOTOS
		      </router-link>
		    </button>
		</div>

	</div>

</template>

<script>
	
	import {db} from '../firebase'
	import {storage} from '../firebase'
 
  export default {
    data() {
      return {  
        uploadTask: null,
        sending: false,
        successMsg:'',
        newAlbum: {
          'nameOne': '',
          'nameTwo': '',
          'date': '',
          'photos': [],
        }
      }
    },
    methods: {
    	createAlbum() {
        this.sending = true;

            db.ref("album").push(this.newAlbum).then(() => {
                console.log("entra")
                this.sending = false;
                this.newAlbum = {
                  'nameOne': '',
                  'nameTwo': '',
                  'date': '',
                  'photos': [],
                };
                this.successMsg = "New album created successfully!";

            }).catch((error) => {
                alert(error);
            });
        }, 
   	 }
  }

</script>

<style scoped>
	.container{
		margin-top: 100px;
		width: 70%; 
	}

	h1{
		margin-bottom: 30px;
	}

	.my-1{
		margin-left: 50px;
	}

	a {
    color: #fff;
    font-weight: 700
  }
	.alert {
		margin-top:30px;
	}

	.btn {
		margin-top: 15px;
	}
</style>