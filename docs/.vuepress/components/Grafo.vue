<!-- Grafo.vue -->
<template>
  <div>
    <p>Grafo: recorrido en profundidad</p>
    <ul>
      <li v-for="nodo in nodos" :key="nodo.id">{{ nodo.id }}: {{ nodo.vecinos.join(', ') }}</li>
    </ul>
    <button @click="recorrerGrafo">Recorrer Grafo</button>
    <p>{{ resultadoRecorrido }}</p>
  </div>
</template>

<script>
export default {
  name: 'Grafo',
  data() {
    return {
      nodos: [
        { id: 1, vecinos: [2, 3] },
        { id: 2, vecinos: [1, 4] },
        { id: 3, vecinos: [1, 4] },
        { id: 4, vecinos: [2, 3] },
      ],
      resultadoRecorrido: '',
    };
  },
  methods: {
    recorrerGrafo() {
      this.resultadoRecorrido = 'Recorriendo grafo...';
      const resultado = this.dfs(1);  // Empezamos el recorrido desde el nodo 1
      this.resultadoRecorrido = `Resultado del recorrido: ${resultado.join(', ')}`;
    },
    dfs(inicio) {
      const visitados = new Set();
      const resultado = [];
      const stack = [inicio];

      while (stack.length > 0) {
        const nodo = stack.pop();

        if (!visitados.has(nodo)) {
          visitados.add(nodo);
          resultado.push(nodo);

          const vecinos = this.nodos.find(n => n.id === nodo).vecinos;
          for (let vecino of vecinos) {
            if (!visitados.has(vecino)) {
              stack.push(vecino);
            }
          }
        }
      }

      return resultado;
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del componente Grafo */
</style>
