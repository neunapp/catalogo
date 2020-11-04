import { createRouter, createWebHistory } from 'vue-router'
//
import Home from '../views/Home.vue'
import ProductosPage from '@/views/ProductosPage.vue'
import CategoriasPage from '@/views/CategoriasPage.vue'
import ProductosPorCategoriaPage from '@/views/ProductosPorCategoriaPage.vue'
import DetalleProductoPage from '@/views/DetalleProductoPage.vue'

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
    path: '/por-categorias',
    component: CategoriasPage,
    children: [
      {
        path: '/:category',
        name: 'productos-categorias',
        component: ProductosPorCategoriaPage
      },
      {
        path: '/ver-producto/:id',
        name: 'ver-producto',
        component: DetalleProductoPage
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
