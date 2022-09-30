<template>
    <section>
        <div class="form"> 
            <form> 
                <label for="email">Email</label>
                <input id="email" name="email" type="email" v-model="email">
                <label for="password">Senha</label>
                <input id="password" name="password" type="password" v-model="password">

                <button>Logar </button>
            </form>
        </div>
        <div class="banner"> 
            <img src="@/assets/login.png" alt="login">
        </div>
    </section>
</template>


<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: ""
    };
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