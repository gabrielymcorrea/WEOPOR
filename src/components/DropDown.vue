<template>
    <div>
        <font-awesome-icon icon="fa-solid fa-sort-down" />

        <nav>
            <router-link to="/"><font-awesome-icon icon="fa-solid fa-user" /> Perfil </router-link>
            <router-link to="/"><font-awesome-icon icon="fa-solid fa-right-to-bracket" /> Sair </router-link>
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
    }
</style>