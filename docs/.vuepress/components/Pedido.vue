<!-- Pedido.vue -->
<template>
    <div>
      <h2>Pedido</h2>
      <Cliente :cedula="cliente.cedula" :nombre="cliente.nombre" />
      <ul>
        <li v-for="producto in productos" :key="producto.numero">
          <Producto :producto="producto" />
        </li>
      </ul>
      <p>Fecha: {{ fecha }}</p>
      <p>Número de Tarjeta de Crédito: {{ numeroTarjetaCredito }}</p>
    </div>
  </template>
  
  <script>
  import Cliente from './Cliente.vue';
  import Producto from './Producto.vue';
  
  export default {
    name: 'Pedido',
    components: {
      Cliente,
      Producto,
    },
    props: {
      cliente: Object,
      productos: Array,
      fecha: String,
      numeroTarjetaCredito: Number,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Pedido */
  </style>
  