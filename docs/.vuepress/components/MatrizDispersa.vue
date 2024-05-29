<!-- MatrizDispersa.vue -->
<template>
    <div>
      <h2>Matriz Dispersa</h2>
      <table>
        <tr v-for="(fila, i) in matriz" :key="i">
          <td v-for="(valor, j) in fila" :key="j">
            {{ valor }}
          </td>
        </tr>
      </table>
      <button @click="recorrerMatriz">Recorrer Matriz</button>
      <p>{{ resultadoRecorrido }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MatrizDispersa',
    data() {
      return {
        matriz: [
          [0, 0, 3],
          [4, 0, 0],
          [0, 5, 0],
        ],
        resultadoRecorrido: '',
      };
    },
    methods: {
      recorrerMatriz() {
        this.resultadoRecorrido = 'Recorriendo matriz dispersa...';
        // Aquí iría la implementación del recorrido de la matriz dispersa
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente Matriz Dispersa */
  </style>  