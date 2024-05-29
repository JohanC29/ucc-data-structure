<!-- Lista.vue -->
<template>
    <div>
      <p>Lista Simple</p>
      <ul>
        <li v-for="nodo in nodos" :key="nodo">{{ nodo }}</li>
      </ul>
      <input v-model="nuevoDato" placeholder="Agregar dato" />
      <button @click="agregar">Agregar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Lista',
    data() {
      return {
        nodos: [],
        nuevoDato: '',
      };
    },
    methods: {
      agregar() {
        if (this.nuevoDato !== '') {
          this.nodos.push(this.nuevoDato);
          this.nuevoDato = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Lista */
  </style>
  