<template>
    <section>
        <div class="form"> 
            <img src="@/assets/logo.png" alt="foto perfil">
            
            <h2>Bem vindo de volta.</h2>

            <form> 
                <InputComponent
                    id="email"
                    type="text"
                    name="Email"
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

                <div> 
                    <CheckBox label="Lembre-me" id="CheckBox" name="CheckBox"/>

                    <router-link to="/">Esqueceu a senha?</router-link>
                </div>

                <ButtonComponent label="Entrar" cor="#2a6041"/> 
            </form>

            <p> Não possui conta? <router-link to="/register">Cadastre-se</router-link> </p>
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
import CheckBox from "@/components/CheckBox";


export default {
    name: "LoginView",
    components: {
        InputComponent, ButtonComponent, CheckBox
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
        height:100vh;
    }

    a{ 
        color: #2a6041;
        font-weight: bold;
    }
    
    h2{
        color: #373F4C;
        margin-bottom: 2rem;
    }

    form > div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.7rem;
    }

    p{
        margin-top: 0.5rem;
        color: #373F4C;
    }

    img{
        position: absolute;
        top: 25px;
        width: 2.5rem;
    }

    .form{
        padding: 5rem;
    }
</style>