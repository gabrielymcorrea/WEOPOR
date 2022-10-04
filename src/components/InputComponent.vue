<template>
    <div> 
        <label for="name">{{label}}</label>
        <input :id="name" :name="name" :type="type" :placeholder="placeholder"> 
    </div>
</template>

<script>

export default {
    props: ['name', 'label', 'type' ,'isRequired','placeholder']
}
</script>

<style scoped>
    div{
        display: flex;
        flex-direction: column;
    }

    input{
        width: 100%;
        padding: 0.6rem;
        border: 1px solid #c1c1c1;
        border-radius: 3px;
        background-color: #f5f5f5;
    }
</style>