<template>
    
    <ExistenciaSabores></ExistenciaSabores>

    <Adornos></Adornos>

    <Pedidos></Pedidos>
 
</template>

<script>
    
    import ExistenciaSabores from '../components/ExistenciaSabores.vue';
    import Pedidos from '../components/Pedidos.vue';
    import Adornos from '../components/Adornos.vue';
    
    export default {
        name: "PasteleroView",
        components: 
            ExistenciaSabores,
            Adornos,
            Pedidos
    };

</script>

<style>
    @import '../assets/styles/pastelero.css';
</style>