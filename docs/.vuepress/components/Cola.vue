<!-- Cola.vue -->
<template>
    <div>
      <p>Cola</p>
      <ul>
        <li v-for="(elemento, index) in cola" :key="index">{{ elemento }}</li>
      </ul>
      <input v-model="nuevoElemento" placeholder="Agregar elemento" />
      <button @click="encolar">Encolar</button>
      <button @click="desencolar">Desencolar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Cola',
    data() {
      return {
        cola: [],
        nuevoElemento: '',
      };
    },
    methods: {
      encolar() {
        if (this.nuevoElemento !== '') {
          this.cola.push(this.nuevoElemento);
          this.nuevoElemento = '';
        }
      },
      desencolar() {
        if (this.cola.length > 0) {
          this.cola.shift();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Cola */
  </style>
  