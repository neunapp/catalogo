<template>
  <div class="header">
    <a href="#" class="header__logo">Mi catalogo</a>

    <ul class="header__menu">
      <li class="header__menu__item">
        <router-link :to="{ name: 'productos' }" class="header__menu__item__link">
          Productos
        </router-link> 
      </li>
      <li class="header__menu__item">
        <router-link 
          :to="{ name: 'categorias', params: {'category': ' '}}" 
          class="header__menu__item__link">
          Categorias
        </router-link> 
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'MainHeader'
  }
</script>

<style lang="scss" scoped>
  .header {
    background: $color-1;
    display: flex;
    justify-content: center;
    align-items: center;
    @include desde($medium) {
      justify-content: space-between;
    }
    @include desde($large) {
      justify-content: space-between;
      padding: 1em;
    }
    &__logo {
      color: $color-2;
      font-family: $ff-1;
      font-size: 24px;
      text-decoration: none;
      @include desde($large) {
        justify-content: space-between;
        font-size: 30px;
      }
    }
    &__menu {
      display: none;
      @include desde($medium) {
        display: flex;
        list-style: none;
        padding: 0px;
        margin: 0px;
        &__item {
          margin: 5px;
          &__link {
            display: block;
            padding: 5px 10px;
            text-decoration: none;
            color: $color-2;
            font-family: $ff-2;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>