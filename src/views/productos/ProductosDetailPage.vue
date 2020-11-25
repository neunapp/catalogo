<template>
  <div class="grid-x">
    <producto-detail />
  </div>
</template>

<script>

  import ProductoDetail from '@/components/productos/ProductoDetail.vue'

  export default {
    name: 'ProductosDetailPage',
    components: {
      ProductoDetail
    }
  }
</script>

<style lang="scss" scoped>

</style>