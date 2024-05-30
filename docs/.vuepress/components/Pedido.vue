<!-- Pedido.vue -->
<template>
  <div>
    <h2>Pedido</h2>
    <Cliente :cedula="cliente.cedula" :nombre="cliente.nombre" />
    <ul>
      <li v-for="producto in productos" :key="producto.numero">
        <div v-if="hasRequiredAttributes(producto)">
          <Camara :producto="producto"/>
        </div>
        <div v-else>
          <Impresion :producto="producto" />
        </div>
      </li>
    </ul>
    <p>Fecha: {{ fecha }}</p>
    <p>Número de Tarjeta de Crédito: {{ numeroTarjetaCredito }}</p>
  </div>
</template>
  
  <script>
import Cliente from "./Cliente.vue";
import Camara from "./Camara.vue";
import Impresion from './Impresion.vue';


export default {
  name: "Pedido",
  components: {
    Cliente,
    Camara,
    Impresion,
  },
  props: {
    cliente: Object,
    productos: Array,
    fecha: String,
    numeroTarjetaCredito: Number,
  },
  methods: {
    hasRequiredAttributes(iproducto) {
      return (
        iproducto &&
        iproducto.numero !== undefined &&
        iproducto.marca !== undefined &&
        iproducto.modelo !== undefined
      );
    },
  },
};
</script>
  
  <style scoped>
/* Estilos específicos del componente Pedido */
</style>
  