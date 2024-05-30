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
      const resultado = this.recorrerMatrizDispersa();
      this.resultadoRecorrido = `Elementos no nulos: ${resultado.join(', ')}`;
    },
    recorrerMatrizDispersa() {
      const elementosNoNulos = [];
      for (let i = 0; i < this.matriz.length; i++) {
        for (let j = 0; j < this.matriz[i].length; j++) {
          if (this.matriz[i][j] !== 0) {
            elementosNoNulos.push(`(${i}, ${j}): ${this.matriz[i][j]}`);
          }
        }
      }
      return elementosNoNulos;
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del componente Matriz Dispersa */
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 30px;
  height: 30px;
  text-align: center;
}
</style>
