<template>
  <div>
    <ul>
      <li 
        v-for="color in listaColores"
        :key="color.id">
        <a href="#">
          .
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

  import apiProductos from '@/api/apiProductos'

  export default {
    name: 'ListaColoresProductos',
    data() {
      return {
        listaColores: []
      }
    },
    methods: {
      cargarColores: function () {
        apiProductos.listaColores().then(
          (response) => {
            this.listaColores = response.data
          }
        )
      }
    },
    mounted: function () {
      this.cargarColores()
    }
  }
</script>

<style lang="scss" scoped>

</style>