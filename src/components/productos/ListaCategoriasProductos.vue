<template>
  <div class="cell">
    <ul class="catagorias">
      <li 
        class="catagorias__item"
        v-for="categoria in categorias"
        :key="categoria.id">
        <router-link
          class="catagorias__item__link" 
          :to="{name: 'productos-categorias', params: {'category': categoria.name_unique}}"
          >
            {{ categoria.name }}
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

  import apiProductos from '@/api/apiProductos'

  export default {
    name: 'ListaCategoriasProductos',
    data() {
      return {
        categorias: []
      }
    },
    methods: {
      cargarCategorias: function () {
        apiProductos.listaCategorias().then(
          (response) => {
            this.categorias = response.data
          }
        )
      }
    },
    mounted() {
      this.cargarCategorias()
    },
  }
</script>

<style lang="scss" scoped>
  .catagorias {
    list-style: none;
    padding: 0px;
    margin: 0px;
    &__item {
      display: block;
      &__link {
        display: block;
        padding: 10px;
        text-decoration: none;
        color: $color2;
        font-family: $ff-2;
        &:hover {
          background: $color4;
        }
      }
    }
  }
</style>