<template>
  <div class="banner">
    <img 
      src="../../assets/fondo.jpg" 
      class="banner__img"
    >
    <h1 class="banner__title">Bienvenido a mi tienda de practicas</h1>
    <div class="banner__copy">
      <p class="banner__copy__text">
        En esta pequeña aplicacion web podre ver un catalogo de productos y practicar con vue router, ciclo de vida de un componente y cargar datos desde un servidor
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Banner'
  }
</script>

<style lang="scss" scoped>
  .banner {
    &__img {
      width: 100%;
      height: 200px;
      @include desde (768px) {
        height: 350px;
      }
      @include desde (1024px) {
        height: 400px;
      }
    }
    &__title {
      text-align: center;
      font-family: $ff-1;
      color: $color2;
    }
    &__copy {
      padding: 1em;
      background: $color3;
      @include desde (768px) {
        margin: 1em;
      }
      @include desde (1024px) {
        margin-left: 8em;
        margin-right: 8em;
      }
      &__text {
        font-size: 12px;
        font-family: $ff-3;
        color: $color4;
        text-align: center;
      }
    }
  }
</style>