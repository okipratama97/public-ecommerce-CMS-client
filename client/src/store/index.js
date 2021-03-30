import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/axios.js'
import router from '@/router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productToEdit: {},
    editAction: ''
  },
  mutations: {
    fetchAllProducts (state, payload) {
      state.products = payload
    },
    productToEdit (state, payload) {
      state.productToEdit = payload
    },
    setEditAction (state, payload) {
      state.editAction = payload
    }
  },
  actions: {
    fetchAllProducts (context) {
      axios
        .get('/products', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          context.commit('fetchAllProducts', data)
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    },
    productToEdit (context, payload) {
      console.log('PTE')
      context.commit('productToEdit', payload)
      context.commit('setEditAction', 'put')
    },
    productToAdd (context) {
      console.log('PTA')
      context.commit('productToEdit', { name: '', image_url: '', price: '', stock: '' })
      context.commit('setEditAction', 'post')
    },
    deleteProduct (context, id) {
      axios
        .delete(`/products/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(data, '<<<!! SUCCESS DELETE')
          context.dispatch('fetchAllProducts')
        })
        .catch(({ response }) => {
          console.log(response.data.message, '<<<!! ERROR DELETE')
        })
    },
    loginUser (context, payload) {
      axios.post('/login', {
        email: payload.loginEmail,
        password: payload.loginPassword
      })
        .then(({ data }) => {
          console.log(data, '<<<!! SUCCESS LOGIN')
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(({ response }) => {
          console.log(response.data.message, '<<<!! ERROR LOGIN')
        })
    },
    submitProduct (context, product) {
      const url = (context.state.editAction === 'put') ? `/products/${product.id}` : '/products'
      axios[context.state.editAction](url, product, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log('HERE')
          console.log(data, `<<<!! SUCCESS ${context.state.editAction}`)
          router.push('/')
        })
        .catch(({ response }) => {
          console.log('THERE')
          console.log(response.data.message, `<<<!! ERROR ${context.state.editAction}`)
        })
    }
  },
  modules: {
  }
})
