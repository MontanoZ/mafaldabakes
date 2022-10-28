
<template>
    <div class="container mt-5">
      <div class="row">
        <Navbar class="me-3"/>
        <section class="col-sm-8 bg-secondary text-white p-0">
          <Header />
          <RouterView class="p-3" :banco="db"/> 
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
    },
    data(){
      return{
        db: null,
      }
    },
    async created() {
      this.db = await this.getDb();
      console.log(this.db)
    },
    methods: {
      async getDb(){
        return new Promise((resolve, reject) => {
          let request = indexedDB.open("teste", 1);
	
          request.onerror = e => {
            console.log('Error ao criar banco de dado!', e);
            reject('Error');
          };

          request.onsuccess = e => {
            resolve(e.target.result);
          }; 
        });
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  * {
    font-family: 'Bebas Neue', cursive;
  }
  body{
    background-color: #7800acce;
    color: #fff; 
  }
</style>
