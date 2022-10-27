<template>
    <div class="despesas">


        <h1>Aqui é a página de Despesas</h1>
        <p>Nesta página serão cadastradas todas as despesas</p>
        <h3>Necessário:</h3>
        <li>Varios inputs para colocar as despesas de cada coisa, como ingredientes, gastos com água e energia, etc</li>
        <li>Dá deixar pro usuario adicionar apenas os gastos variaveis e o fixos são acrescentados automaticamente</li>
        <li>Fazer um campo que será colocado o mês, isso vai servir de index no banco de dados</li>
        <li>No final fazer um input pra enviar os dados pro banco de dados</li>
        
        <input type="text" v-model="input_despesas_fixas" placeholder="Informe as despesas fixas">
        <input type="text" v-model="input_despesas_variaveis" placeholder="Informe as despesas variáveis">
        <input type="submit" value="Enviar" v-on:click="submitForm">
    
    </div>
</template>

<script>
export default{
    name: "Despesas"
}
</script>


<style scoped>

</style>