import { createRouter, createWebHistory } from 'vue-router';
import Clases from '@/components/Clases.vue';
import SubClases from '@/components/SubClases.vue';
import DetallesClase from '@/components/DetallesClase.vue';
import SubClaseHabilidad from '@/components/SubClaseHabilidad.vue';

const routes = [
  { path: '/', component: Clases },
  { path: '/subclases', component: SubClases },
  { path: '/detalles', component: DetallesClase },
  { path: '/habilidad', component: SubClaseHabilidad }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
