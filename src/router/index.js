import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductosPage from '@/views/productos/ProductosPage.vue'
import CategoriasPage from '@/views/categorias/CategoriasPage.vue'
import ProductosPorCategoriaPage from '@/views/productos/ProductosPorCategoriaPage.vue'
import ProductosDetailPage from '@/views/productos/ProductosDetailPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productos',
    name: 'productos',
    component: ProductosPage
  },
  {
    path: '/categorias',
    component: CategoriasPage,
    children: [
      {
        path: ':category',
        name: 'categorias',
        component: ProductosPorCategoriaPage,
        query: null, // parte de solucion a la tarea
      },
      {
        path: '/producto-detalle/:id',
        name: 'detalle-producto',
        component: ProductosDetailPage
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
