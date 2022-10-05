<template>
    <section class="container">
        <h1>Dashboard</h1>

        <CardComponent />
    </section>
</template>


<script>
import CardComponent from "@/components/CardComponent"

export default {
  name: "DashboardView",
  components: {
    CardComponent
  },
  created () {
    document.title = "Dashboard";
  }
};
</script>


<style>

</style>