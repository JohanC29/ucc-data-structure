<!-- BusquedaAEstrella.vue -->
<template>
  <div>
    <p>Búsqueda A*</p>
    <p>Inicio: {{ inicio }}</p>
    <p>Objetivo: {{ objetivo }}</p>
    <p>{{ resultadoBusqueda }}</p>
    <button @click="buscar">Buscar</button>
  </div>
</template>

<script>
export default {
  name: 'BusquedaAEstrella',
  data() {
    return {
      resultadoBusqueda: '',
      grafo: {
        A: { B: 1, C: 4 },
        B: { A: 1, C: 2, D: 5 },
        C: { A: 4, B: 2, D: 1 },
        D: { B: 5, C: 1, E: 3 },
        E: { D: 3 }
      },
      heuristica: {
        A: 7,
        B: 6,
        C: 2,
        D: 1,
        E: 0
      },
      inicio: 'A',
      objetivo: 'E',
    };
  },
  methods: {
    buscar() {
      this.resultadoBusqueda = 'Ejecutando Búsqueda A*...';
      const resultado = this.aEstrella(this.inicio, this.objetivo);
      this.resultadoBusqueda = resultado ? `Ruta encontrada: ${resultado.join(' -> ')}` : 'Ruta no encontrada';
    },
    aEstrella(inicio, objetivo) {
      const { grafo, heuristica } = this;
      const abiertos = new Set([inicio]);
      const cerrados = new Set();
      const g = { [inicio]: 0 };
      const f = { [inicio]: heuristica[inicio] };
      const padres = { [inicio]: null };

      while (abiertos.size) {
        let actual = null;
        for (let nodo of abiertos) {
          if (actual === null || f[nodo] < f[actual]) {
            actual = nodo;
          }
        }

        if (actual === objetivo) {
          const ruta = [];
          while (actual !== null) {
            ruta.unshift(actual);
            actual = padres[actual];
          }
          return ruta;
        }

        abiertos.delete(actual);
        cerrados.add(actual);

        for (let vecino in grafo[actual]) {
          if (cerrados.has(vecino)) continue;

          const gTentativo = g[actual] + grafo[actual][vecino];
          if (!abiertos.has(vecino)) {
            abiertos.add(vecino);
          } else if (gTentativo >= g[vecino]) {
            continue;
          }

          padres[vecino] = actual;
          g[vecino] = gTentativo;
          f[vecino] = g[vecino] + heuristica[vecino];
        }
      }
      return null;
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del componente Búsqueda A* */
</style>