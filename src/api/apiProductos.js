import axios from 'axios'

const apiProductos = {
  productosPopulares: function () {
    return axios.get('https://servicios.neunapp.com/api/tienda/productos/lista/')
  },
  listaCategorias: function () {
    return axios.get('https://servicios.neunapp.com/api/tienda/categorias/lista/')
  },
  filtrarProductos: function (filtros) {
    return axios.get('https://servicios.neunapp.com/api/tienda/productos/lista/?' + filtros)
  },
  getProducto: function (id) {
    return axios.get('https://servicios.neunapp.com/api/tienda/producto/' + id + '/')
  },
  listaColores: function () {
    return axios.get('https://servicios.neunapp.com/api/tienda/colores/lista/')
  },
}

export default apiProductos