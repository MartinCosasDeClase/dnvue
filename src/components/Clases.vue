<script>
import axios from "axios";

export default {
  data() {
    return {
      clases: []
    };
  },
  async mounted() {
    try {
      const res = await axios.get("http://localhost:8080/api/clases");
      this.clases = res.data;
    } catch (error) {
      console.error("Error al obtener clases:", error);
    }
  }
};
</script>

<template>
  <div>
    <h1>Lista de Clases</h1>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Imagen</th>
        <th>Subclases</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="clase in clases" :key="clase.id">
        <td>{{ clase.id }}</td>
        <td>{{ clase.name }}</td>
        <td>{{ clase.miniDescription }}</td>
        <td>
          <img :src="clase.imagen" width="100" height="100" />
        </td>
        <td>
          <ul>
            <li v-for="sub in clase.subclases" :key="sub.id">
              {{ sub.nameSubClase }}
            </li>
          </ul>
        </td>
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
