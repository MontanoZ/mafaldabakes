<template>
    <div class="header px-4">
        <h1 class="pt-3">Mafalda Bakes</h1>
        <div class="user">
            <h4 class="pt-2">Usuário</h4>
            <img class="img" :src="usuario" :alt="alt">
        </div>
    </div>    
</template>

<script>
    export default{
        name: "Header",
        data(){
            return{
                usuario: "/img/vovo.png",
                alt: "Foto do Usuario"
            }
        }
    }

</script>

<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        text-align: left;
        list-style: none;
        color: black;
        text-decoration: none;
        background-color: #f5b000;
        margin-bottom: 15px;
    }

    .user{
        gap: 5px;
        align-items: center;
        display: flex;
    }

    img{
        display: inline-block;
        width: 40px;
        border: 2px solid;
        border-radius: 50%;
        border-color: black;
    }
</style>