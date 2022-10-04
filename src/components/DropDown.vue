<template>
    <div>
        <font-awesome-icon icon="fa-solid fa-sort-down" />

        <nav>
            <router-link to="/">Perfil </router-link>
            <router-link to="/">Sair <font-awesome-icon icon="fa-solid fa-share-from-square" /></router-link>
        </nav>

    </div>
</template>

<script>
export default {
    name: 'DropDown',
}
</script>

<style scoped>
    nav{
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 5.5rem;
        min-width: 8rem;
        right: 1rem;
        border-radius: 0.5rem;
        background: #fff;
    }

    nav a{
        padding: 0.5rem 1rem;
    }

    a:last-child { 
        border-top: 1px solid #f1f1f1;
        padding-top: 4px;
    }

    a:hover{
        background-color: #f1f1f1;
    }

    svg{
        position: absolute;
        right: 0;
        margin-right: 15px;
    }
</style>