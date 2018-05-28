<template>
	<div class="container">
		<h4>Selecciona el álbum de boda para subir tus mejores recuerdos</h4>
	
	<div class="row">
		<div class="card-group pt-1 pb-1 col-lg-4 col-md-6 col-sm-12" v-for = "item in album" :key="item['.key']">
			<div class="card p-0">
				<img 
					src="src/assets/04-02-02.jpg" 
					class="card-img img-fluid card-img-top" alt="Card image"/>
					<div class="card-img-overlay">
				    <h5 class="card-title date">{{ item.nameOne }}</h5>
				    <h5 class="card-title date">&#38;</h5>
				    <h5 class="card-title date">{{ item.nameTwo }}</h5>
				  </div>
					<p class="mt-2">{{item.date}}</p>
					<div class="card cardButton">
						<button @click="selectAlbum(item['.key'])" class="btn btn-success">
							<span>Album</span>
						</button>
					</div>
			</div>
		</div>
	</div>

	</div>
</template>

<script>
	
	import {db} from './../firebase'

	export default {
			data() {
				return {
					sending :false,
					album: []
				}
			},
			firebase:{
			album:{
				source: db.ref("album")
			}
		},
		methods: {
			selectAlbum(id){
				localStorage.setItem('selectedAlbum', id)
				this.$router.push({name:'upfile'})
				window.location.reload(true)

			}
		}	
	}	
</script>

<style>
	h4{
		margin: 40px 0px;
	}
	span{
		font-weight: 600;
	}
	h5{
		font-family: lobster;
	}
	.card{
		margin-bottom: 20px;
		padding:;
	}
	.cardButton{
		margin-bottom: 0px
	}
	a{
		text: #FFF;
	}
	#foto.img-src{
		height: 10px;
	}
	p{
		font-weight: 700;
	}
	.row{
		margin-bottom: 100px;
	}
	.date{
		color:white;
		margin-top: 10px;
		font-size: 30px;
	}
</style>

