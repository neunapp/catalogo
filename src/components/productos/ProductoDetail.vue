<template>
  <div v-if="producto" class="grid-x grid-margin-x producto">
    <div class="cell small-12 large-7">
      <img
        class="producto__img" 
        :src="producto.main_image" 
      >
      <div class="producto__images">
        <img 
          class="producto__images__img"
          :src="producto.second_image">
        <img 
          class="producto__images__img"
          :src="producto.third_image">
      </div>
    </div>
    <div class="cell small-12 large-5">
      <p class="producto__name">{{ producto.name }}</p>
      <p class="producto__categorias">
        <span 
          class="producto__categorias__categoria"
          v-for="categoria in producto.category"
          :key="categoria.id">
            {{ categoria.name }}
        </span>
      </p>
      <p class="producto__colores">
        <span 
          class="producto__colores__color"
          v-for="color in producto.colors"
          :key="color.id"
          :style="{ background: color.value }">
            
        </span>
      </p>
      <p class="producto__precio">$ {{ producto.price }}</p>
    </div>
    <div class="cell">
      <p class="producto__descripcion" v-html="producto.description"></p>
    </div>
  </div>
  <div v-else>
    cargando....
  </div>
</template>

<script>

  import apiProductos from '@/api/apiProductos'

  export default {
    name: 'ProductoDetail',
    data() {
      return {
        producto: null
      }
    },
    methods: {
      recuperarProducto: function () {
        apiProductos.getProducto(this.$route.params.id).then(
          (response) => {
            console.log('res: ', response)
            this.producto = response.data
          }
        )
      }
    },
    mounted() {
      this.recuperarProducto()
    },
  }
</script>

<style lang="scss" scoped>
  .producto {
    margin: 10px;
    background: $color4;
    padding-bottom: 1em;
    padding-top: 1em;
    &__img {
      width: 100%;
      height: 150px;
      margin-bottom: 10px;
      @include desde(720px) {
        height: 300px;
      }
    }
    &__images {
      display: flex;
      justify-content: center;
      align-items: center;
      &__img {
        width: 50px;
        height: 50px;
        margin: 5px;
        @include desde(720px) {
          width: 100px;
          height: 100px;
        }
      }
    }
    &__name {
      font-family: $ff-1;
      font-size: 24px;
      color: $color2;
      margin-bottom: 1em;
    }
    &__categorias {
      border: 1px solid $color3;
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 1em;
      &__categoria {
        display: block;
        color: $color3;
        margin: 5px;
      }
    }
    &__colores {
      display: flex;
      border: 1px solid $color1;
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 1em;
      &__color {
        width: 30px;
        height: 30px;
        border: 1px solid $color2;
        margin: 5px;
      }
    }
    &__precio {
      font-size: 26px;
      color: $color1;
      font-weight: bold;
      font-family: $ff-2;
    }
  }
</style>