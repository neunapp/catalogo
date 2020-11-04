<template>
  <div class="grid-x grid-margin-x">
    <filtrar-productos />
  </div>
</template>

<script>

  import FiltrarProductos from '@/components/productos/FiltrarProductos.vue'

  export default {
    name: 'ProductosPorCategoriaPage',
    components: {
      FiltrarProductos
    }
  }
</script>

<style lang="scss" scoped>

</style>