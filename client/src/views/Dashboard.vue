<template>
  <div>
    <NavBar />
    <div class="my-3">
      <h1>Products</h1>
    </div>
    <div class="container">
      <div class="row justify-content-end mb-2">
        <div class="col-2">
          <button @click.prevent="addProduct" class="btn btn-success">Add Product</button>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <Product v-for="product in products" :key="product.id" :product="product" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Product from '../components/Product.vue'

export default {
  components: { NavBar, Product },
  data () {
    return {
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('productToAdd')
      this.$router.push('/products/add')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchAllProducts')
  }
}
</script>
