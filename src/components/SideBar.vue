<template>
    <section> 
        <h2> <b>WE</b>OPOR </h2>

        <nav>
            <router-link to="/"><font-awesome-icon icon="fa-solid fa-house" /> Dashboard </router-link>
            <router-link to="/produtos"><font-awesome-icon icon="fa-solid fa-cookie-bite" /> Produtos </router-link>
            <router-link to="/"><font-awesome-icon icon="fa-solid fa-right-to-bracket" /> Sair </router-link>
        </nav>

        <a class="comunicado">
            <img src="@/assets/pedido.png" alt="pedidos">
            <p>Não deixe seus clientes esperando, <b>acompanhe seus pedidos. </b></p>
        </a>
    </section>
</template>

<script>

export default {
    name: "SideBar",
}
</script>

<style scoped>
    section {
        height: 100vh;
        width: 16rem;
        background-color: #fff;
        padding: 2rem 3rem;
        position: fixed;
        z-index: 1;
    }

    section h2{
        font-weight: normal;
        font-size: 2.2rem;
    }

    section h2 b{
        color: #6cae75;
        font-weight: bold;
    }

    nav{
        margin: 2.5rem 0;
        font-size: 1.1rem;
        display: flex;
        flex-direction: column;
    }

    nav a {
        margin-bottom: 0.7rem;
    }

    nav a svg{
        margin-right: 0.7rem;
        font-size: 1.3rem;
    }

    .comunicado{
        background: linear-gradient(180deg, rgba(255,255,255,1) 30%, rgba(0,72,124,1) 30%);
        color: #fff;
        border-radius: 0.6rem;
        padding: 0.8rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        cursor: pointer;
    }

    .comunicado img{
        height: 70%;
        width: 70%;
        margin-bottom: 1rem;
    }
</style>