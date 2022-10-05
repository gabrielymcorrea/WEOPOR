<template>
    <div> 
        <label for="name">{{label}}</label>
        <input :id="id" :name="name" :type="type"> 
    </div>
</template>

<script>

export default {
    props: ['name', 'label', 'type' ,'isRequired','id']
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
        /* background-color: #f5f5f5; */
        margin-bottom: 1rem;
        color: #a0a0a0;
    }

    input:focus {
        outline: 0;
        border: 1px solid #373F4C;
    }

    label{
        margin-bottom: 5px;
        font-weight: bold;
        color: #373F4C;
    }
</style>