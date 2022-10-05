<template>
    <section>
        <div class="form"> 
            <img src="@/assets/logo.png" alt="foto perfil">

            <h2>Olá, Bem vindo.</h2>

            <form> 
                <InputComponent
                    id="name"
                    type="text"
                    name="name"
                    isRequired="true"
                    label="Nome do estabelecimento"
                />

                <InputComponent
                    id="email"
                    type="text"
                    name="email"
                    isRequired="true"
                    label="Email"
                />

                <InputComponent
                    id="password"
                    type="password"
                    name="password"
                    isRequired="true"
                    label="Senha"
                />

                <ButtonComponent label="Cadastrar" /> 
            </form>

            <p>Já possui conta? <router-link to="/login">Entrar</router-link> </p>
        </div>

        <div class="banner">
        <!-- <img src="@/assets/login.png" alt="login"> -->
        </div>
    </section>
</template>


<script>
import { mapMutations } from "vuex";
import InputComponent from "@/components/InputComponent";
import ButtonComponent from "@/components/ButtonComponent";


export default {
    name: "RegisterView",
    components: {
        InputComponent, ButtonComponent,
    },
    data() {
        return {
            email: "",
            password: ""
        };
    },
    created() {
        this.toggleEveryDisplay();
        document.title = "Login";
    },
    methods: {
        ...mapMutations(["toggleEveryDisplay"]),
    },
};
</script>


<style scoped>
    section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        align-items: center;

        background-color: #fff;
        height: 100vh;
    }

    a{ 
        color: #2a6041;
        font-weight: bold;
    }
    
    h2{
        color: #191a19;
        margin-bottom: 2rem;
    }

    p{
        margin-top: 0.5rem;
        color: #373F4C;
    }

    img{
        position: absolute;
        top: 25px;
        width: 3rem;
    }

    .form{
        padding: 5rem;
    }
</style>