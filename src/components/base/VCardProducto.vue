<template>
  <div class="producto">
    <img 
      :src="image" 
      class="producto__img">
    <router-link 
      :to="ruta"
      class="producto__name">
        {{ name }}
    </router-link>
    <p class="producto__price">
      $ {{ price }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'VCardProducto',
    props: {
      image: String,
      name: String,
      price: Number,
      ruta: Object
    }
  }
</script>

<style lang="scss" scoped>
  .producto {
    margin: 5px;
    background: $color-4;
    &__img {
      width: 100%;
      height: 100px;
      margin-bottom: 10px;
    }
    &__name {
      font-family: $ff-2;
      color: $color-3;
      display: block;
      text-decoration: none;
      padding-left: 10px;
      margin-bottom: 10px;
      text-transform: capitalize;
    }
    &__price {
      font-size: 20px;
      font-weight: bold;
      padding-left: 10px;
      margin-bottom: 10px;
      color: $color-2;
    }
  }
</style>