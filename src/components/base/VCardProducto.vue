<template>
  <div class="card-producto">
    <img 
      class="card-producto__img"
      :src="image"
    >
    <router-link :to="link" class="card-producto__name">
      {{ name }}
    </router-link>
    <p class="card-producto__price">$ {{ price }}</p>
  </div>
</template>

<script>
  export default {
    name: 'VCardProducto',
    props: {
      image: String,
      name: String,
      price: Number,
      link: Object
    }
  }
</script>

<style lang="scss" scoped>
  .card-producto {
    background: $color4;
    &__img {
      width: 100%;
      height: 150px;
      margin-bottom: 10px;
    }
    &__name {
      font-family: $ff-2;
      color: $color3;
      display: block;
      padding-left: 10px;
      margin-bottom: 10px;
      text-decoration: none;
      text-transform: capitalize;
    }
    &__price {
      padding-left: 10px;
      margin-bottom: 10px;
      font-family: $ff-2;
      font-size: 20px;
      color: $color2;
      font-weight: bold;
    }
  }
</style>