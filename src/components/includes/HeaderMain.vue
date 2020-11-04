<template>
  <div class="header">
    <a 
      href="/"
      class="header__title">Mi Catalogo</a>
    
    <ul class="header__menu">
      <li class="header__menu__item">
        <router-link
          :to="{ name: 'productos' }"
          class="header__menu__item__link">Productos</router-link>
      </li>
      <li class="header__menu__item">
        <router-link
          :to="{name: 'productos-categorias', params: {'category': ' '}}"
          class="header__menu__item__link">Categorias</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HeaderMain'
  }
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    background: $color1;
    @include desde(640px) {
      justify-content: space-between;
    }
    &__title {
      font-family: $ff-1;
      text-decoration: none;
      font-size: 24px;
      color: $color2;
    }
    &__menu {
      @include hasta(640px) {
        display: none;
      }
      list-style: none;
      margin: 0px;
      padding: 0px;
      display: flex;
      &__item {
        display: block;
        &__link {
          display: block;
          margin: 5px;
          font-family: $ff-2;
          color: $color2;
          @include desde(1024px) {
            font-weight: bold;
          }
        }
      }
    }
  }
</style>