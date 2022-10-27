<template>
    <div class="despesas">

        <h1>Aqui é a página de Despesas</h1>
        <p>Nesta página serão cadastradas todas as despesas</p>
        <h2>Necessário:</h2>
        <li>Varios inputs para colocar as despesas de cada coisa, como ingredientes, gastos com água e energia, etc</li>
        <li>Dá deixar pro usuario adicionar apenas os gastos variaveis e o fixos são acrescentados automaticamente</li>
        <li>Fazer um campo que será colocado o mês, isso vai servir de index no banco de dados</li>
        <li>No final fazer um input pra enviar os dados pro banco de dados</li>
        
        <form class="row g-3">
            <h3>Despesas variáveis:</h3>
            <div class="col-md-12">
                <div class="col-md-2">
                    <select id="mes" class="form-select">
                    <option selected>Mês</option>
                    <option v-for="mes in meses" v-bind:key="mes.id">{{ mes.mes }}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <label for="Mantimentos" class="form-label">Mantimentos</label>
                <input  type="number" step="0.01" min="0" class="form-control" id="Mantimentos" placeholder="0,00">
            </div>
            <div class="col-md-6">
                <label for="combustivel" class="form-label">Combustível</label>
                <input type="number" step="0.01" min="0" class="form-control" id="combustivel" placeholder="0,00">
            </div>
            <div class="col-md-6">
                <label for="Agua" class="form-label">Água</label>
                <input type="number" step="0.01" min="0" class="form-control" id="Agua" placeholder="0,00">
            </div>
            <div class="col-md-6">
                <label for="Energia" class="form-label">Energia</label>
                <input type="number" step="0.01" min="0" class="form-control" id="Energia" placeholder="0,00">
            </div>
            <div class="col-12">
                <a @click="addGastos" class="btn btn-primary">Cadastrar</a>
            </div>
        </form>
    
    </div>
</template>

<script>
    export default{
        name: "Despesas",
        data(){
            return {
                meses: [
                    {id: 1, mes: 'Janeiro'},
                    {id: 2, mes: 'Fevereiro'},
                    {id: 3, mes: 'Março'},
                    {id: 4, mes: 'Abril'},
                    {id: 5, mes: 'Maio'},
                    {id: 6, mes: 'Junho'},
                    {id: 7, mes: 'Julho'},
                    {id: 8, mes: 'Agosto'},
                    {id: 9, mes: 'Setembro'},
                    {id: 10, mes: 'Outubro'},
                    {id: 11, mes: 'Novembro'},
                    {id: 12, mes: 'Dezembro'},
                ]
            }
        },
        props: {
            banco: IDBDatabase
        },
        methods: {
            async addGastos(){
                console.log(this.banco) 
                this.banco.onupgradeneeded = e => { // Colocar isso no app junto com a criação do banco
                    var db = e.target.result;
                    console.log("db")
                    var variaveis = db.createObjectStore("variaveis");
                    variaveis.add({campo: 'agua'}, 1); 
                }
            }
        }
    }
</script>


<style scoped>

</style>