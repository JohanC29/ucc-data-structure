# Temario Estructuras de Datos

## 1. Identificar estructuras de datos con apuntadores y sin apuntadores

### Memoria dinámica: definiciones y conceptos

* <MemoriaDinamica/>

### Declaración y utilización de variables con memoria dinámica

* <VariablesMemoriaDinamica/>

### Estructuras de datos sin apuntadores y con apuntadores

* <EstructurasDatos/>

## 2. Definir estructuras de datos sin apuntadores y con apuntadores

### Listas (sencillas, doblemente encadenadas, circulares)

* <Lista/>

### Pilas

* <Pila/>

### Colas

* <Cola/>

### Árboles (conceptos y tipos, árboles binarios, árboles AVL)

* <Arbol/>

## 3. Utilizar estructuras de datos

### Recorrido, búsqueda, profundidad y anchura

* <Recorrido/>

### Algoritmo de búsqueda A*

```js
const grafo = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1, E: 3 },
  E: { D: 3 }
};

const heuristica = {
  A: 7,
  B: 6,
  C: 2,
  D: 1,
  E: 0
};
```

* <BusquedaAEstrella/>

### Grafos: definiciones y conceptos, declaración de un grafo, algoritmos para recorrer un grafo

* <Grafo/>

### Matriz Dispersa: conceptos y definiciones, declaración de una matriz dispersa, algoritmos para recorrer una matriz dispersa

* <MatrizDispersa/>
