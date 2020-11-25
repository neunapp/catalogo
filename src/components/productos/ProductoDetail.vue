<template>
  <div v-if="producto" class="grid-x grid-margin-x producto">
    <div class="cell small-12 medium-7">
      <img 
        :src="producto.main_image" 
        class="producto__img">
      <div class="producto__imgs">
        <img 
          :src="producto.second_image"
          class="producto__imgs__img">
        <img 
          :src="producto.third_image"
          class="producto__imgs__img">
      </div>
    </div>

    <div class="cell small-12 medium-5">
      <h3 class="producto__title"> {{ producto.name }} </h3>
      <p class="producto__categorias">
        <span
          v-for="categoria in producto.category"
          :key="categoria.id" 
          class="producto__categorias__categoria">
            {{ categoria.name }}
        </span>
      </p>
      <p class="producto__colores">
        <span 
          class="producto__colores__color"
          v-for="color in producto.colors"
          :key="color.id"
          :style="{ background: color.value}">
        </span>
      </p>
      <p class="producto__price">
        $ {{ producto.price }}
      </p>
    </div>

    <div class="cell small-12">
      <p class="producto__description" v-html="producto.description">
      </p>
    </div>
  </div>
</template>

<script>

  import apiProductos from '@/api/productos'

  export default {
    name: 'ProductoDetail',
    data() {
      return {
        producto: null
      }
    },
    methods: {
      recuperarProducto: function () {
        apiProductos.recuperarProducto(this.$route.params.id).then(
          (response) => {
            this.producto = response.data
            console.log(response)
          }
        )
      }
    },
    beforeMount () {
      this.recuperarProducto()
    }
  }
</script>

<style lang="scss" scoped>
  .producto {
    &__img {
      width: 100%;
      height: 200px;
      margin-bottom: 10px;
      @include desde($medium) {
        height: 300px;
      }
    } 
    &__imgs {
      display: flex;
      justify-content: center;
      align-items: center;
      &__img {
        width: 100px;
        height: 100px;
        margin: 5px;
      }
    }
    &__title {
      font-family: $ff-1;
      font-size: 20px;
      color: $color-2;
      margin-top: 1em;
      margin-bottom: 1em;
    }
    &__categorias {
      border: 1px solid;
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 1em;
      &__categoria {
        color: $color-3;
        display: block;
        margin: 5px;
      }
    }
    &__colores {
      border: 1px solid $color-1;
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 1em;
      display: flex;
      &__color {
        width: 30px;
        height: 30px;
        border: 1px solid $color-3;
        margin: 5px;
      }
    }
    &__price {
      font-size: 26px;
      color: $color-1;
      font-weight: bold;
      font-family: $ff-2;
    }
    &__description {
      margin-top: 1em;
    }
  }
</style>