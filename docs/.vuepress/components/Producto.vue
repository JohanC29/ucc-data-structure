<!-- Producto.vue -->
<template>
    <div>
      <h4>Producto</h4>
      <p>Número: {{ producto.numero }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Producto',
    props: {
      producto: Object,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Producto */
  </style>
  