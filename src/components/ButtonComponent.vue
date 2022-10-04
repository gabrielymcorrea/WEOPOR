<template>
    <button>
        {{label}}
    </button>
</template>
 
<script>

export default {
    props: ['label']
}
</script>

<style scoped>
    button{
        color: white;
        background-color: #2a6041;
        border: none;
        padding: 0.6rem 2rem;
        border-radius: 3px;
    }
</style>