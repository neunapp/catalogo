<template>
  <div class="cell">
    <ul class="lista">
      <li 
        class="lista__item"
        v-for="color in colores"
        :key="color.id">
        <a 
          :href="'?colors=' + color.id" 
          class="lista__item__link"
          :style="{ background: color.value }">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

  import apiColores from '@/api/colores'

  export default {
    name: 'TheListaColores',
    data() {
      return {
        colores: []
      }
    },
    methods: {
      cargarColores: function () {
        apiColores.listarColores().then(
          (response) => {
            this.colores = response.data
          }
        )
      }
    },
    beforeMount () {
      this.cargarColores()
    }
  }
</script>

<style lang="scss" scoped>
  .lista {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 10px;
    &__item {
      display: block;
      margin-right: 3px;
      &__link {
        display: block;
        border: 1px solid $color-2;
        width: 30px;
        height: 30px;
        text-decoration: none;
      }
    }
  }
</style>