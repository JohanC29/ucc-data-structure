<!-- ListaSimple.vue -->
<template>
    <div>
      <h2>Lista Simple</h2>
      <ul>
        <li v-for="nodo in nodos" :key="nodo.dato">{{ nodo.dato }}</li>
      </ul>
      <input v-model="nuevoDato" placeholder="Agregar dato" />
      <button @click="agregar(nuevoDato)">Agregar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListaSimple',
    data() {
      return {
        nodos: [],
        nuevoDato: '',
      };
    },
    methods: {
      agregar(dato) {
        if (dato !== '') {
          this.nodos.push({ dato });
          this.nuevoDato = '';
        }
      },
    },
  };
  </script>
