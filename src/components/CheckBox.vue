<template>
    <div>
        <input
            :id="id"
            type="checkbox"
            :name="name"
            :checked="checked"
        />
        <label class="custom-control-label" :for="id">{{label}}</label>
    </div>
</template>

<script>
export default {
    name: "CheckBox",
    props: {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        checked: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            required: true,
        },
    },
}
</script>

<style>
    label{
        color: #373F4C;
        margin-bottom: 3px;
    }

    input[type=checkbox] {
        accent-color: #2a6041;
        height:1rem;
        width: 1rem;
    }
</style>