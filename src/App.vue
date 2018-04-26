<template>
    <div>
        <h1>Hello! I am app!</h1>

        <component is="dynamic-component"></component>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "app",

        components: {
            'dynamic-component': (resolve, reject) => {
                let module = axios.get('/dist/components/DynamicComponent.js');

                module.then((res) => {
                   return resolve(eval(res.data));
                });
            }
        },

        mounted() {

        }
    }
</script>

<style scoped>

</style>