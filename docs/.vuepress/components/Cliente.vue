<!-- Cliente.vue -->
<template>
    <div>
      <h3>Cliente</h3>
      <p>Cédula: {{ cedula }}</p>
      <p>Nombre: {{ nombre }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Cliente',
    props: {
      cedula: String,
      nombre: String,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Cliente */
  </style>