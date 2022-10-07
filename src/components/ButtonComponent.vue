<template>
    <button :style="{background: cor}">
        {{label}}
    </button>
</template>
 
<script>
export default {
    props: ['label','cor']
}
</script>

<style scoped>
    button{
        color: white;
        border: none;
        padding: 0.6rem 2rem;
        border-radius: 3px;
        width: 100%;
    }
</style>