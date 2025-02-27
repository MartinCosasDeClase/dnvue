<script>
import axios from "axios";
export default {
  data() {
    return {
      habilidades: []
    };
  },
  async mounted() {
    try {
      const res = await axios.get("http://localhost:8080/api/habilidad");
      this.habilidades = res.data;
    } catch (error) {
      console.error("Error al obtener habilidades de subclase:", error);
    }
  }
};
</script>

<template>
  <div>
    <h1>Lista de Habilidades de Subclases</h1>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Subclase</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="habilidad in habilidades" :key="habilidad.id">
        <td>{{ habilidad.id }}</td>
        <td>{{ habilidad.habilidadNombre }}</td>
        <td>{{ habilidad.habilidadDescripcion }}</td>
        <td>{{ habilidad.subclase.nameSubClase }}</td>
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
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: black;
}
</style>
