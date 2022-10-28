<template>
    <div>
        <div class="row pe-3">
            <h1 class="ms-2 px-0 pb-1 border-bottom border-2">Cadastro de Despesas:</h1>
        </div>
        <!-- <h2>Necessário:</h2>
        <li>Varios inputs para colocar as despesas de cada coisa, como ingredientes, gastos com água e energia, etc</li>
        <li>Daria para deixar o usuario adicionar apenas os gastos variáveis e o fixos são acrescentados automaticamente</li>
        <li>Fazer um campo que será colocado o mês, isso vai servir de index no banco de dados</li>
        <li>No final fazer um input pra enviar os dados pro banco de dados</li><br> -->
        <div class="row pt-3 ">
            <svg class="col-1 px-0" id="i-caret-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M10 30 L26 16 10 2 Z" />
            </svg>
            <h3 class="col-10 ps-0">Despesas Variáveis:</h3>
        </div>
        <form class="row g-3 mt-1">
            <div class="col-md-12 mb-4">
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
                <input type="button" @click="addGastos" id="cadastrar" class="btn btn-primary" value="Cadastrar">
            </div>
        </form>

        <div class="row pt-3 mt-5">
            <svg class="col-1 px-0" id="i-caret-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M10 30 L26 16 10 2 Z" />
            </svg>
            <h3 class="col-10 ps-0">Despesas Fixas:</h3>
        </div>

        <form class="row g-3">
            <div class="col-md-6">
                <label for="Contabilidade" class="form-label">Contabilidade</label>
                <input  type="number" step="0.01" min="0" class="form-control" id="Contabilidade" placeholder="0,00">
            </div>
            <div class="col-md-6">
                <label for="Impostos" class="form-label">Impostos</label>
                <input type="number" step="0.01" min="0" class="form-control" id="Impostos" placeholder="0,00">
            </div>
            <div class="col-md-4">
                <label for="Aluguel" class="form-label">Aluguel</label>
                <input type="number" step="0.01" min="0" class="form-control" id="Aluguel" placeholder="0,00">
            </div>
            <div class="col-md-4">
                <label for="Internet" class="form-label">Internet</label>
                <input type="number" step="0.01" min="0" class="form-control" id="Internet" placeholder="0,00">
            </div>
            <div class="col-md-4">
                <label for="funcionario" class="form-label">Funcionário(s)</label>
                <input type="number" step="0.01" min="0" class="form-control" id="funcionario" placeholder="0,00">
            </div>
            <div class="col-12">
                <input type="button" @click="addFixos" id="cadastrar" class="btn btn-primary" value="Cadastrar">
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
                // Gastos Variaveis
            },
            async addFixos(){
                console.log(this.banco) 
                // Fazer uma função que acrescentaria os gastos fixos.
            }
            
        }
    }
</script>

<style scoped>
    div{
        font-family: 'Oxygen', sans-serif;
    }

    #mes{
        position: absolute;
        width: 12%;
        cursor: pointer;
    }

    label{
        margin-top: 30px;
    }

    input, #mes{
        display: inline-block;
        border-radius: 20px solid;
        border-color: #4a0568;
    }

    #cadastrar{
        background-color: #4a0568;
    }

    #cadastrar:hover{
        border-color: #f5b000;
    }
</style>