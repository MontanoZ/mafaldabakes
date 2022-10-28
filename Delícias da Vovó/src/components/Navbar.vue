<template>
    <nav class="bg-light col-sm-3 text-center">
        <img id="img" class="img-fluid rounded-circle img-thumbnail m-4" :src="logo" :alt="alt">
        <ul id="nav" class="nav flex-column">
            <RouterLink class=" nav-link" to="/">Dashboard</RouterLink><br>
            <RouterLink class=" nav-link" to="/Planejamento">Planejamento</RouterLink><br>
            <RouterLink class=" nav-link" to="/Despesas">Despesas</RouterLink><br>
            <RouterLink class=" nav-link mb-5" to="/Produtos">Produtos</RouterLink>
        </ul> 
    </nav>
    
</template>

<script>
export default {
    name: "Navbar",
    data(){
        return {
            logo: "/img/vovo-navbar.jpg",
            alt: "Logo Delícias da VoVó"
        }
    }
}
</script>

<style scoped>
    nav{
        border: #7800ac solid 5px;
    }
    .nav-link {
        border: #4a0568 solid 2px;
        border-radius: 5px;
        color: #7900ac;
    }
    .nav-link:hover {
        background-color: #f5b000;
        color: #4a0568;
    }
    #nav .router-link-exact-active{
        color: #4a0568;
    }
    #img {
        width: 100px;
    }
</style>