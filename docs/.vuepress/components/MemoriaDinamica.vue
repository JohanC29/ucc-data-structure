<!-- MemoriaDinamica.vue -->
<template>
  <div>
    <p>Definiciones y Conceptos:</p>
    <p>La memoria dinámica permite la asignación y liberación de memoria durante la ejecución del programa. Es útil para estructuras de datos que pueden cambiar de tamaño.</p>
    <p>{{ mensaje }}</p>
    <button @click="asignarMemoria">Asignar Memoria</button>
    <button @click="liberarMemoria">Liberar Memoria</button>
  </div>
</template>

<script>
export default {
  name: 'MemoriaDinamica',
  data() {
    return {
      buffer: null,
      mensaje: '',
    };
  },
  methods: {
    asignarMemoria() {
      this.buffer = new Array(100).fill(0);
      this.mensaje = 'Memoria asignada: ' + this.buffer.length + ' elementos';
    },
    liberarMemoria() {
      this.buffer = null;
      this.mensaje = 'Memoria liberada';
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del componente Memoria Dinámica */
</style>
