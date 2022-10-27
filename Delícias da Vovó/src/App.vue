
<template>
    <div class="container mt-5">
      <div class="row">
        <Navbar class="me-3"/>
        <section class="col-sm-8 bg-secondary text-white p-0">
          <Header />
          <RouterView class="p-2 "/> 
        </section>
      </div>
    </div>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from "./components/Header.vue"
  import Navbar from "./components/Navbar.vue"

  export default {
    components: {
      Header,
      Navbar
    }
  }
</script>

<style>

  body{
    background-color: rgba(0, 0, 0, 0.20);
    color: #fff; 
  }
  
</style>
