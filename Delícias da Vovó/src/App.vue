<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Dashboard</RouterLink><br>
        <RouterLink to="/Planejamento">Planejamento</RouterLink><br>
        <RouterLink to="/Despesas">Despesas</RouterLink><br>
        <RouterLink to="/Produtos">Produtos</RouterLink>
      </nav>
    </div>
    <RouterView />
  </header>

</template>

<style scoped>

</style>
