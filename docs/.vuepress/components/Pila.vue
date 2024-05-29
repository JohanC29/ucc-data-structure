<!-- Pila.vue -->
<template>
    <div>
      <p>Pila</p>
      <ul>
        <li v-for="(elemento, index) in pila" :key="index">{{ elemento }}</li>
      </ul>
      <input v-model="nuevoElemento" placeholder="Agregar elemento" />
      <button @click="apilar">Apilar</button>
      <button @click="desapilar">Desapilar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Pila',
    data() {
      return {
        pila: [],
        nuevoElemento: '',
      };
    },
    methods: {
      apilar() {
        if (this.nuevoElemento !== '') {
          this.pila.push(this.nuevoElemento);
          this.nuevoElemento = '';
        }
      },
      desapilar() {
        if (this.pila.length > 0) {
          this.pila.pop();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Pila */
  </style>
  