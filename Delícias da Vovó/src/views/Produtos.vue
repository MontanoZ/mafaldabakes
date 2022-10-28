<template>
    <div>
        <form class="row g-3">
            <h1 class="border-bottom border-2 px-0 pb-1">Cadastro de Produtos:</h1>
            <div class="col-md-6">
                <label for="Produto" class="form-label">Produto</label>
                <input  type="text" class="form-control " id="Produto">
            </div>
            <div class="col-md-6">
                <label for="valor" class="form-label">Preço de Venda</label>
                <input type="number" step="0.01" min="0" class="form-control" id="valor" placeholder="0,00">
            </div>
            <div class="col-12">
                <input type="button" @click="addProdutos" id="cadastrar" class="btn btn-primary" value="Cadastrar">
            </div>
        </form>
    </div>
</template>

<script>
export default{
    name: "Produtos",
    props: {
        banco: IDBDatabase
    },
    methods: {
        async addProdutos(){
            console.log(this.banco) 
        }
    }
}
</script>


<style scoped>

    div{
        font-family: 'Oxygen', sans-serif;
    }

    input{
        border-color:#4a0568;
    }

    #cadastrar{
        background-color: #4a0568;
    }

    #cadastrar:hover{
        border-color: #f5b000;
    }

    
</style>