<!-- EstructurasDatos.vue -->
<template>
    <div>
      <h4>Estructuras de Datos</h4>
      <h5>Sin Apuntadores</h5>
      <p>Ejemplos: Array, Vector</p>
      <button @click="agregarElementoSinApuntador">Agregar Elemento a Array</button>
      <p>{{ array.join(', ') }}</p>
      <h3>Con Apuntadores</h3>
      <p>Ejemplos: Lista Enlazada, Árbol Binario</p>
      <button @click="agregarNodoConApuntador">Agregar Nodo a Lista Enlazada</button>
      <ul>
        <li v-for="(nodo, index) in listaEnlazada" :key="index">{{ nodo }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EstructurasDatos',
    data() {
      return {
        array: [],
        listaEnlazada: [],
      };
    },
    methods: {
      agregarElementoSinApuntador() {
        this.array.push(this.array.length + 1);
      },
      agregarNodoConApuntador() {
        this.listaEnlazada.push(this.listaEnlazada.length + 1);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Estructuras de Datos */
  </style>
  