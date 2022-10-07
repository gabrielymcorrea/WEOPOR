<template>
    <section>
        <p> Oh No ! </p>
    </section>
</template>

<script>
import { mapMutations } from "vuex";


export default {
    name: 'ErrorView',
    created() {
        this.toggleEveryDisplay();
    },
    methods: {
        ...mapMutations(["toggleEveryDisplay"]),
    },
}
</script>

<style scoped>
</style>