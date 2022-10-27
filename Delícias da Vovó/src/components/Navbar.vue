<template>
    <!-- col-4 bg-danger bg-gradient -->
    
    <nav class="bg-light  col-sm-4 ">
        <ul class="nav">
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
  
</style>