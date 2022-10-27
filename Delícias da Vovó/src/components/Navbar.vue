<template>
    <nav class="bg-light col-sm-3 ">
        <ul id="nav" class="nav flex-column text-center ">
            <RouterLink class=" nav-link" to="/">Dashboard</RouterLink><br>
            <RouterLink class=" nav-link" to="/Planejamento">Planejamento</RouterLink><br>
            <RouterLink class=" nav-link" to="/Despesas">Despesas</RouterLink><br>
            <RouterLink class=" nav-link" to="/Produtos">Produtos</RouterLink>
        </ul> 
    </nav>
    
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        async corNav(){
            
        }
    }
}
</script>

<style scoped>
    .nav-link {
        color: #7900ac;
    }
    .nav-link:hover {
        color: #4a0568;
    }
    #nav .router-link-exact-active{
        color: #f5b000;
    }
</style>