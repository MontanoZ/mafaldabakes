
<template>
    <div class="container mt-5 ">
      <div class="row ">
        <Navbar />
        <section class="col-sm-8 bg-secondary text-white">
          <RouterView /> <!-- Isso é o que permite chamar as outras páginas -->
        </section>

      </div>
    </div>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from "./components/Navbar.vue"

  export default {
    components: {
      Navbar
    }
  }
</script>

<style scoped>

</style>
