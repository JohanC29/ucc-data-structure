<!-- Recorrido.vue -->
<template>
  <div>
    <p>Recorrido en Anchura</p>
    <ul>
      <li v-for="nodo in recorrido" :key="nodo">{{ nodo }}</li>
    </ul>
    <button @click="recorrerAnchura">Recorrer</button>
  </div>
</template>

<script>
export default {
  name: 'Recorrido',
  data() {
    return {
      grafo: {
        1: [2, 3],
        2: [4, 5],
        3: [6, 7],
        4: [],
        5: [],
        6: [],
        7: []
      },
      recorrido: [],
    };
  },
  methods: {
    recorrerAnchura() {
      this.recorrido = [];
      let cola = [1]; // Comenzamos desde el nodo 1
      let visitado = new Set();

      while (cola.length) {
        let nodo = cola.shift();

        if (!visitado.has(nodo)) {
          this.recorrido.push(nodo);
          visitado.add(nodo);

          for (let vecino of this.grafo[nodo]) {
            if (!visitado.has(vecino)) {
              cola.push(vecino);
            }
          }
        }
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del componente Recorrido */
</style>
