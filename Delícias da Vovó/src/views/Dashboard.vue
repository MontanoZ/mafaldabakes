<template>

  <main>
   
    <div class="dash">
        <h1 class="dash-title">Aqui é a página inicial - Dashboard</h1>
        <!-- <p>Nesta página vai ter dois blocos, um com lucro bruto e outro com lucro liquido</p>
        <p>Além disso, tem que ter um filtro, tipo um seletor, onde dára pra escolher de que mês que vai aparecer os lucros</p>
        <p>Também pensei em aparecer o quanto deu em gastos fixos e variaveis, cada um em um bloco</p> -->

        <div class="row d-flex justify-content-evenly ps-0 mt-5">
          <div class="card w" style="border-left: 5px solid #4a0568">
            <div class="card-body text-dark">
              <h2 style="color: #f5b000">Lucro Bruto:</h2>
              <p>R$ 00,00</p>
            </div>
          </div>
          <div class="card w" style="border-left: 5px solid #4a0568">
            <div class="card-body text-dark">
              <h2 style="color: #f5b000">Lucro Líquido:</h2>
              <p>R$ 00,00</p>
            </div>
          </div>
        </div>
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

<style scoped>

  main{
    font-family: 'Oxygen', sans-serif;
  }
  .w{
    width: 40%;
  }

</style>
