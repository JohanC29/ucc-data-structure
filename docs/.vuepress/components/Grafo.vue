<!-- Grafo.vue -->
<template>
    <div>
      <p>Grafo</p>
      <ul>
        <li v-for="nodo in nodos" :key="nodo.id">{{ nodo.id }}: {{ nodo.vecinos.join(', ') }}</li>
      </ul>
      <button @click="recorrerGrafo">Recorrer Grafo</button>
      <p>{{ resultadoRecorrido }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Grafo',
    data() {
      return {
        nodos: [
          { id: 1, vecinos: [2, 3] },
          { id: 2, vecinos: [1, 4] },
          { id: 3, vecinos: [1, 4] },
          { id: 4, vecinos: [2, 3] },
        ],
        resultadoRecorrido: '',
      };
    },
    methods: {
      recorrerGrafo() {
        this.resultadoRecorrido = 'Recorriendo grafo...';
        // Aquí iría la implementación del recorrido del grafo
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Grafo */
  </style>
  