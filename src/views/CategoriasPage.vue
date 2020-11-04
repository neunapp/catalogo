<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x" style="padding: 2em">
      <div class="cell small-12 medium-3">
        <lista-categorias-productos />
      </div>
      <div class="cell small-12 medium-9">
        <lista-colores-productos />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

  import ListaCategoriasProductos from '@/components/productos/ListaCategoriasProductos'
  import ListaColoresProductos from '@/components/productos/ListaColoresProductos'

  export default {
    name: 'CategoriasPage',
    components: {
      ListaCategoriasProductos,
      ListaColoresProductos
    }
  }
</script>

<style lang="scss" scoped>

</style>