<script>
import axios from "axios";
export default {
  data() {
    return {
      subclases: []
    };
  },
  async mounted() {
    try {
      const res = await axios.get("http://localhost:8080/api/subclases");
      this.subclases = res.data;
    } catch (error) {
      console.error("Error al obtener subclases:", error);
    }
  }
};
</script>

<template>
  <div>
    <h1>Lista de Subclases</h1>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Clase Principal</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="sub in subclases" :key="sub.id">
        <td>{{ sub.id }}</td>
        <td>{{ sub.nameSubClase }}</td>
        <td>{{ sub.clase.name }}</td>
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

