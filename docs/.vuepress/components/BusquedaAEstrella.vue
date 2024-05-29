<!-- BusquedaAEstrella.vue -->
<template>
    <div>
      <p>Búsqueda A*</p>
      <p>{{ resultadoBusqueda }}</p>
      <button @click="buscar">Buscar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BusquedaAEstrella',
    data() {
      return {
        resultadoBusqueda: '',
      };
    },
    methods: {
      buscar() {
        this.resultadoBusqueda = 'Ejecutando Búsqueda A*...';
        // Aquí iría la implementación del algoritmo de búsqueda A*
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Búsqueda A* */
  </style>
  