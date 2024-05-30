<!-- Foto.vue -->
<template>
    <div>
      <p>Fichero: {{ foto.fichero }}</p>
      <button @click="printFoto">Print</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Foto',
    props: {
      foto: Object,
    },
    methods: {
      printFoto() {
        alert(`Printing ${this.foto.fichero}`)
      }
    },
  };
  </script>
  