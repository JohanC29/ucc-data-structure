<!-- Camara.vue -->
<template>
    <div>
      <Producto :producto="producto" />
      <p>Marca: {{ producto.marca }}</p>
      <p>Modelo: {{ producto.modelo }}</p>
    </div>
  </template>
  
  <script>
  import Producto from './Producto.vue';
  
  export default {
    name: 'Camara',
    components: {
      Producto,
    },
    props: {
      producto: Object,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Camara */
  </style>
  