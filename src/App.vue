<template>
  <div id="app">
    <div class="container-fluid">
      <MainHeader/>  
    </div>

    <div class="container-fluid">
      <transition>
          <router-view/>
      </transition>
    </div>

    <div class="container">
      <MainFooter/>
    </div>
  </div>
</template>

<script>

  import MainHeader from './components/Header'
  import MainFooter from './components/Footer'
  
  export default {
    components: {
      MainHeader,
      MainFooter,
    }
  }

  
</script>

<style>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  .btn{
    background-color: #59e2d7 !important;
    border-color: #59e2d7 !important;
  }


</style>