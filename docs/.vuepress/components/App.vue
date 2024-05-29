<template>
  <div id="app">
    <h1>Gestión de Pedidos</h1>
    <Pedido
      :cliente="cliente"
      :productos="productos"
      :fecha="fecha"
      :numeroTarjetaCredito="numeroTarjetaCredito"
    />
    <input
      type="number"
      class="form-control"
      id="inputnumeroTarjetaCredito"
      placeholder="1.5"
      min="0"
      v-model="numeroTarjetaCredito"
      @keyup.enter="focusInputProxySize()"
      ref="inputnumeroTarjetaCredito"
      :class="isValidenumeroTarjetaCredito"
    />
  </div>
</template>
  
  <script>
import Pedido from "./Pedido.vue";

export default {
  name: "App",
  components: {
    Pedido,
  },
  data() {
    return {
      cliente: {
        cedula: "1234567890",
        nombre: "John Doe",
      },
      productos: [
        { numero: 1, marca: "Canon", modelo: "EOS 5D" },
        {
          numero: 2,
          color: "Color",
          fotos: [{ fichero: "foto1.jpg" }, { fichero: "foto2.jpg" }],
        },
      ],
      fecha: "2024-05-28",
      numeroTarjetaCredito: 1234567890123456,
    };
  },
  methods: {
    focusInputDeveloperHours() {},
  },
};
</script>
  
  <style>
/* Estilos globales */
</style>
  