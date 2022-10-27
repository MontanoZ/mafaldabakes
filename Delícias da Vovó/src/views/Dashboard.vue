<template>

  <main>
    
     <div class="dash">
        <h1 class="dash-title">Aqui é a página inicial - Dashboard</h1>
        <p>Nesta página vai ter dois blocos, um com lucro bruto e outro com lucro liquido</p>
        <p>Além disso, tem que ter um filtro, tipo um seletor, onde dára pra escolher de que mês que vai aparecer os lucros</p>
        <p>Também pensei em aparecer o quanto deu em gastos fixos e variaveis, cada um em um bloco</p>
     </div>
    
  </main>

</template>

<script>
export default{
    name: "Dashboard",
    props: {
        banco: IDBDatabase
    },
    methods: {
      
    }

}
</script>

<style>


</style>
