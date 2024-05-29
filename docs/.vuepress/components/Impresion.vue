<!-- Impresion.vue -->
<template>
    <div>
      <Producto :producto="producto" />
      <p>Color: {{ producto.color }}</p>
      <ul>
        <li v-for="foto in producto.fotos" :key="foto.fichero">
          <Foto :foto="foto" />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import Producto from './Producto.vue';
  import Foto from './Foto.vue';
  
  export default {
    name: 'Impresion',
    components: {
      Producto,
      Foto,
    },
    props: {
      producto: Object,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Impresion */
  </style>
  