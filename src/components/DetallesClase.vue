<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "Detalles de Clases",
      detalles: []
    };
  },
  async mounted() {
    try {
      const res = await axios.get(`http://localhost:8080/api/detalles`);
      console.log(res);
      this.detalles = res.data;
    } catch (error) {
      console.error("Error al obtener los detalles de las clases:", error);
    }
  }
};
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <table v-if="detalles">
      <thead>
      <tr>
        <th>ID</th>
        <th>Descripción Larga</th>
        <th>Estadísticas</th>
        <th>Clase</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="detalle in detalles" :key="detalle.id">
        <td>{{ detalle.id }}</td>
        <td>{{ detalle.descripcionLarga }}</td>
        <td>{{ detalle.estadisticas }}</td>
        <td>{{ detalle.clase.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

table th, table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

table th {
  background-color: black;
}
</style>
