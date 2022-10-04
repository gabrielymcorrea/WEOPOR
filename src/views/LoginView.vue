<template>
    <section>
        <div class="form"> 
            <form> 
                <InputComponent
                  id="email"
                  type="text"
                  name="Email"
                  isRequired="true"
                  label="Email"
                  placeholder="Informe seu email"
                />

                <InputComponent
                  id="password"
                  type="password"
                  name="password"
                  isRequired="true"
                  label="Senha"
                  placeholder="Informe sua senha"
                />

                <ButtonComponent label="Entrar" /> 
            </form>
        </div>
        <!-- <img src="@/assets/login.png" alt="login"> -->
    </section>
</template>


<script>
import { mapMutations } from "vuex";
import InputComponent from "@/components/InputComponent";
import ButtonComponent from "@/components/ButtonComponent";

export default {
    name: "LoginView",
    components: {
        InputComponent, ButtonComponent
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
    form{
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
    }

    label{
        margin-top: 0.8rem;
        margin-bottom: 0.2rem;
    }

    button{
        margin-top: 1rem;
    }

    .form{
        padding: 3rem 2rem;
    }

    section {
        display: grid;
        grid-template-columns: 1fr 2fr;
        justify-content: space-between;
        align-items: center;
    }

    .banner{
        background-color: #2a6041;
        height: 100vh;

        padding: 3rem 2rem;
        display: flex;
        justify-content: center;
    }

    img{
        max-height: 100%;
        width: 40rem;
        object-fit: cover;
    }
</style>