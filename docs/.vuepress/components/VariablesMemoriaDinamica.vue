<!-- VariablesMemoriaDinamica.vue -->
<template>
    <div>
        <p>Variables con Memoria Dinámica</p>
      <input
        type="number"
        placeholder="Cantidad de elementos"
        v-model="cantidad"
        min="1"
        @keyup.enter="asignarMemoria(cantidad)"
      />
      <p>{{ mensaje }}</p>
      <button @click="asignarMemoria(cantidad)">Asignar Memoria</button>
      <button @click="liberarMemoria">Liberar Memoria</button>
    </div>
  </template>
    
    <script>
  export default {
    name: "VariablesMemoriaDinamica",
    data() {
      return {
        buffer: null,
        mensaje: "",
        cantidad: null,
      };
    },
    methods: {
      asignarMemoria(icantidad) {
        if (icantidad > 0) {
          this.buffer = new Array(icantidad).fill(0);
          let tamano = new Blob([this.buffer]).size;
          this.mensaje =
            "Memoria asignada: " +
            this.buffer.length +
            " elementos. Peso en Byte: " +
            tamano;
        }
      },
      liberarMemoria() {
        this.buffer = null;
        let tamano = new Blob([this.buffer]).size;
        this.mensaje = "Memoria liberada." + " Peso en Byte: " + (tamano - 4);
      },
    },
  };
  </script>
    
    <style scoped>
  /* Estilos específicos del componente Memoria Dinámica */
  </style>
    