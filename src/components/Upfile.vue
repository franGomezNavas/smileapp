<template>
  
  <div class="container-fluid">

    <div class="row upFileImg">
      <div class="col-md-6 ">
        <form>
          <h3>Sube aquí tu foto</h3>
            <div class="form-group row">
             
              <div class="col-sm-9">
                <input 
                  type="file" 
                  accept="image/*" 
                  name="" 
                  id="" 
                  @change="photoSelected($event.target.files);"
                />
              </div>
            </div>

            <div class="form-group row justify-content-center">
                <button 
                  :disabled="sending" 
                  class="btn btn-success btn-sm btn ml-4 pl-4 pr-4 pt-2 pb-2" 
                  type="button" 
                  v-on:click="upImg()">
                    Subir Foto
                </button>
            </div>
        </form> 
      </div>

      <div class="col-md-3">
        <img
          class="imgCharge mt-3" 
            v-if="imageData != ''" 
            v-bind:src="imageData" 
            width="100%" 
          />
        </div>
          
        <div class="col-md-3">  
          <div v-if="successMsg !== ''" class="login-success-msg gif" >
            <img src="src/assets/giphy.gif" class="mt-3"></img>
            <br>
            <span class="mt-1">{{ successMsg }}</span>
          </div>
      </div>
    </div>

    <div class="row getImg">
      <div class="col-12 col-sm-8 col-md-6 col-lg-3 pt-2 pb-2" v-for = "item in source" :value="item['.value']">
        <lightbox v-bind:src="item['.value']" caption="" album="albumA" duration="1">
          <img v-bind:src="item['.value']" width="100%" duration="1"/>
        </lightbox>
      </div>
    </div> <!-- Fin de get image -->

    <div class="row">
      <div class="col">
        <img src="src/assets/inconSmile%21.png" alt="" width="5%" height="auto" class="logo">
      </div>
    </div>
  </div>
    
</template>

<script>
   
    import {db} from './../firebase'
    import {storage} from './../firebase'
    import axios from 'axios';
    import VueLightbox from 'vue-lightbox'
    
    export default {
        data() {
            return {
                album: localStorage.getItem('selectedAlbum'),
                uploadTask: null,
                sending: false,
                currentFile: null,
                imageData: [],
                successMsg:''
                }
            },
            firebase:{
                source: db.ref('album/' + localStorage.getItem('selectedAlbum') + '/photos')
            },
            // computed: {
            //   reversedSource: function () {
            //     return this.source.reverse();
            //   }
            // },
        methods: {
            reload() {
                setTimeout(3000)
                window.location.reload(true)
            },
            upImg() {
                this.sending = true;

                //concatenamos un número aleatorio para evitar el solape de imágenes
                let randomInt = Math.floor((Math.random() * 100) + 1);
                let fileName = randomInt + "_" + this.currentFile.name;

                this.uploadTask = storage.ref('album/' + this.album + '/' + fileName).put(this.currentFile);

                this.uploadTask.then(snapshot => {
                        var imgUrl = this.uploadTask.snapshot.downloadURL
                        
                        this.successMsg = "Ouh Yeah subido!";
                

                        db.ref("album/" + this.album + "/photos").push(imgUrl).then(() => {
                            this.sending = false;
                            this.imageData = '';
                            this.progressUpload = 0;
                        }).catch((error) => {
                            alert(error);
                        });
                    });
            },
            photoSelected(files) {
                this.currentFile = files[0];

                // create a new FileReader to read this image and convert to base64 format
                let reader = new FileReader();

                reader.onload = (e) => {
                    // Read image as base64 and set to imageData
                    this.imageData = e.target.result;
                    console.log(e.target)
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(this.currentFile);
            },

        },
        
    }
</script>

<style scoped>

    form {
        margin-top: 30px;
    }

    .imgCharge {
        width: 200px;
    }
    
    .upFileImg{
      background-color: #f0f0fa;
      padding: 0 40px;
    }

    tbody{
         width: 300px;
         height: auto;
         margin:5px;
    }
    span{
      font-weight: 600;
    }
    .getImg {
      margin: 30px 20px 30px 20px; 
    }
    
    .logo{
      margin-bottom: 120px;
    }
</style>