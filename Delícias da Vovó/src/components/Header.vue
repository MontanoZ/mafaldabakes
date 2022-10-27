<template>
    <div class="header">
        <h1>Mafalda Bakes</h1>
        <div class="user">
            <h4>Usuário</h4>
            <img class="img" src="../vovo.png" alt="">
        </div>
    </div>    
</template>

<script>
    export default{
        name: "Header",
        methods: {
        async corNav(){
            
        }
    }
    }

</script>

<style scoped>
    .header{
        justify-content: space-between;
        align-items: center;
        height: 70px;
        text-align: left;
        list-style: none;
        display: flex;
        color: black;
        text-decoration: none;
        background-color: white;
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