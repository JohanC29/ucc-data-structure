<!-- Recorrido.vue -->
<template>
    <div>
      <p>Recorrido en Anchura</p>
      <ul>
        <li v-for="nodo in recorrido" :key="nodo">{{ nodo }}</li>
      </ul>
      <button @click="recorrerAnchura">Recorrer</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Recorrido',
    data() {
      return {
        nodos: [1, 2, 3, 4, 5, 6, 7],
        recorrido: [],
      };
    },
    methods: {
      recorrerAnchura() {
        this.recorrido = [];
        let cola = [...this.nodos];
        while (cola.length) {
          let nodo = cola.shift();
          this.recorrido.push(nodo);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Recorrido */
  </style>
  