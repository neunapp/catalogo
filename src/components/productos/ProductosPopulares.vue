<template>
  <div class="cell grid-x grid-margin-x">
    <div 
      class="cell small-6 medium-4 large-3"
      v-for="producto in productos"
      :key="producto.id">
      <v-card-producto 
        :image="producto.main_image"
        :name="producto.name"
        :price="parseFloat(producto.price)"
        :ruta="{ name: 'detalle-producto', params: {id: producto.id}}"
      />
    </div>
  </div>
</template>

<script>

  import apiProductos from '@/api/productos'

  import VCardProducto from '@/components/base/VCardProducto.vue'

  export default {
    name: 'ProductosPopulares',
    components: {
      VCardProducto
    },
    data() {
      return {
        productos: []
      }
    },
    methods: {
      cargarProductos: function () {
        apiProductos.productosPopulares().then(
          (response) => {
            this.productos = response.data.results
          }
        )
      }
    },
    mounted () {
      this.cargarProductos()
    }
  }
</script>

<style lang="scss" scoped>

</style>