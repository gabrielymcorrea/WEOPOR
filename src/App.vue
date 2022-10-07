<template>
  <div id="app" class="grid">
    <NavBar v-if="this.$store.state.showNav" />
    <SideBar v-if="this.$store.state.showNav" />

    <main id="main">
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    SideBar,
    NavBar,
  },
};
</script>

<style>
/* 2a6041
6cae75
ebebeb
a4bfeb
00487c
*/
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap");

* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

a,
svg {
  text-decoration: none;
  color: #a0a0a0;
  cursor: pointer;
}

img {
  object-fit: cover;
}

.grid {
  display: grid;
  grid-template-columns: 16rem auto auto;
  grid-template-rows: 5rem auto auto;
  grid-template-areas:
    "navBar navBar navBar"
    "sideBar main main"
    "sideBar main main";
}

body {
  font-family: "Ubuntu", sans-serif;
  color: #a0a0a0;
  background: #ebebeb;
  cursor: default;
}

.grid > .navBar {
  grid-area: navBar;
}

.grid > .sideBar {
  grid-area: sideBar;
}

.grid > #main {
  grid-area: main;
  padding: 2rem 3rem;
  height: 100vh;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
