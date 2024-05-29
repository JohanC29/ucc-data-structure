<!-- Producto.vue -->
<template>
    <div>
      <h3>Producto</h3>
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
  