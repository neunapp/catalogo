<template>
  <div class="grid-x grid-margin-x align-center">
    <div 
      class="cell small-6 medium-4 large-3"
      v-for="producto in productos"
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
  //
  import apiProductos from '@/api/apiProductos'
  import VCardProducto from '@/components/base/VCardProducto.vue'

  export default {
    name: 'FiltrarProductos',
    components: {
      VCardProducto
    },
    data() {
      return {
        productos: []
      }
    },
    watch: {
      '$route.params.category': function () {
        this.cargarProductos()
      }
    },
    methods: {
      cargarProductos: function () {
        let filtros = 'category=' + this.$route.params.category
        apiProductos.filtrarProductos(filtros).then(
          (response) => {
            this.productos = response.data.results
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