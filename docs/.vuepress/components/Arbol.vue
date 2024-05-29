<!-- Arbol.vue -->
<template>
    <div>
      <p>Árbol Binario</p>
      <ul>
        <li v-for="nodo in nodos" :key="nodo">{{ nodo }}</li>
      </ul>
      <input v-model="nuevoNodo" placeholder="Agregar nodo" />
      <button @click="agregarNodo">Agregar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Arbol',
    data() {
      return {
        nodos: [],
        nuevoNodo: '',
      };
    },
    methods: {
      agregarNodo() {
        if (this.nuevoNodo !== '') {
          this.nodos.push(this.nuevoNodo);
          this.nuevoNodo = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Árbol Binario */
  </style>
  