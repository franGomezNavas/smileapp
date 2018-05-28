<template>
	
	<div class="container-fluid">
		<b-jumbotron>
		  <template slot="header">
		   Anacleto y Socorro
		  </template>
		  
		  <hr class="my-4">
		  <p>
		    Descarga las fotografías de tu boda
		  </p>
		  <b-btn variant="primary" href="#">Descargar</b-btn> 
		</b-jumbotron>

		<div class="row mt-4 mb-4">
			<!-- <div class="col-md-3 col-sm-6 mt-4" v-for="item in getImg"> -->
			<!-- <tbody v-for = "item in menu" :key="item['.key']">
					<tr>
						<td><img v-if="item.photo" v-bind:src="item.photo" width="100%" /></td>
					</tr>
				</tbody> -->
		</div>

	</div>

</template>

<!-- <script>
	
	import {db} from './../firebase'
	import {auth} from './../firebase'

	export default {
		data() {
			return {
				menu: []
			}
		},
		firebase:{
			menu:{
				source: db.ref("menu")
			},
		},
	}
</script> -->

<style>
	tbody{
		 width: 300px;
		 height: auto;
		 margin:5px;
	}
</style>