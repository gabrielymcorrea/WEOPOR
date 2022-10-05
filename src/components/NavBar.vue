<template>
    <section>
        <h3>{{ $route.name }}</h3>

        <div> 
            <small> Ches's </small>
            <img src="@/assets/profile.jpg" alt="foto perfil">
            <DropDown />
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
        }
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
        display:none;
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
</style>