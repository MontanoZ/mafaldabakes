
<template>
    <div class="container mt-5 ">
      <div class="row ">
        <Header />
        <Navbar />
        <section class="col-sm-8 bg-secondary text-white">
          <RouterView /> <!-- Isso é o que permite chamar as outras páginas -->
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
