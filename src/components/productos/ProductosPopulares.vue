<template>
  <div class="cell grid-x grid-margin-x align-center">
    <div 
      class="cell small-6 medium-4 large-3"
      v-for="producto in listaProductos"
      :key="producto.id">
      <v-card-producto
        :image="producto.main_image"
        :name="producto.name"
        :price="parseFloat(producto.price)"
        :link="{ name: 'ver-producto', params: {'id': producto.id }}"
      />
    </div>
  </div>
</template>

<script>
  // api
  import apiProductos from '@/api/apiProductos'
  //

  import VCardProducto from '@/components/base/VCardProducto'

  export default {
    name: 'ProductosPopulares',
    components: {
      VCardProducto
    },
    data() {
      return {
        listaProductos: []
      }
    },
    methods: {
      cargarProductos: function () {
        apiProductos.productosPopulares().then(
          (response) => {
            this.listaProductos = response.data.results
          }   
        )
      }
    },
    mounted() {
      this.cargarProductos()
    },
  }
</script>

<style lang="scss" scoped>

</style>