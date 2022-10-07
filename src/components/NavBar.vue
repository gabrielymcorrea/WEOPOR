<template>
    <section class="navBar">
        <div>
            <font-awesome-icon icon="fas fa-bars" />

            <h3>{{ $route.name }}</h3>
        </div>

        <div > 
            <small> Ches's </small>
            <img src="@/assets/profile.jpg" alt="foto perfil">
            <DropDown :paginas="urls"/>
        </div>
    </section>
</template>

<script>
import DropDown from "@/components/DropDown";

export default {
    name: 'NavBar',
    components: {
        DropDown
    },
    data(){
        return {
            urls : [
                {
                    "url":"/perfil",
                    "label":"Perfil",
                }, {
                    "url":"/",
                    "label":"Sair",
                }
            ]
        }
    },
    created() {
        console.log(this.urls)
    }
}
</script>

<style scoped>
    section {
        background-color: #fff;
        height: 5rem;
        width: 100%;
        position: fixed;
        padding: 1rem 2rem 1rem 18rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img{
        width: 3rem;
        height: 3rem;
        margin: 0 0 0 0.6rem;
    }

    small{
        font-weight: bold;
    }

    div{
        display: flex;
        align-items: center;
    }   

    h3{
        margin-left: 0.5rem;
    }

    svg{
        font-size: 1.5rem;
        color: #6cae75;
    }
</style>