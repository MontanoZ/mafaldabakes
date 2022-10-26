<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/Planejamento">Planejamento</RouterLink>
        <RouterLink to="/Despesas">Despesas</RouterLink>
        <RouterLink to="/Produtos">Produtos</RouterLink>
      </nav>
    </div>
    <RouterView />
  </header>

</template>

<style scoped>

</style>
