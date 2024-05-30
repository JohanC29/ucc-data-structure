<template>
  <div id="app">

    <div class="json-editor">
    <textarea
      v-model="jsonContent"
      @input="updateJson"
      class="json-editor__textarea"
      placeholder="Ingrese su JSON aquí..."
    ></textarea>
    <pre class="json-editor__preview">{{ formattedJson }}</pre>
  </div>

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
      productos: [],
      fecha: "2024-05-28",
      numeroTarjetaCredito: 1234567890123456,
      jsonContent :'[{ "numero": 1, "marca": "Canon", "modelo": "EOS 5D" },{"numero": 2, "color": "Color","fotos": [{ "fichero": "foto1.jpg" }, { "fichero": "foto2.jpg" }]}]',
      formattedJson :'',
    };
  },
  methods: {
    focusInputDeveloperHours() {},
    updateJson(event) {
      
      try {
        this.formattedJson = JSON.stringify(JSON.parse(this.jsonContent), null, 2);
        this.productos=JSON.parse(this.jsonContent)
      } catch (error) {
        this.formattedJson = 'Error: JSON inválido';
      }
    },
  },
};
</script>
  

<style scoped>
.json-editor {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.json-editor__textarea {
  font-family: monospace;
  font-size: 14px;
  padding: 8px;
  min-height: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.json-editor__preview {
  font-family: monospace;
  font-size: 14px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  white-space: pre-wrap;
  overflow: auto;
  max-height: 300px;
}
</style>






