<template>
  <div class="container col-xl-6 mt-5 mb-3">
    <div class="card py-4 px-2">
      <form @submit.prevent="submitForm">
        <div class="form-group row justify-content-start">
          <label class="col-xl-2 col-form-label" for="name">Name</label>
          <div class="col-xl-10">
            <input v-model="product.name" type="text" name="name" id="name" class="form-control" placeholder="Insert name" aria-describedby="name">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-2 col-form-label" for="image_url">Image URL</label>
          <div class="col-xl-10">
            <input v-model="product.image_url" type="text" class="form-control" name="image_url" id="image_url" aria-describedby="image_url" placeholder="Insert image url">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-2 col-form-label" for="price">Price</label>
          <div class="col-xl-10">
            <input v-model="product.price" type="text" class="form-control" name="price" id="price" aria-describedby="price" placeholder="Insert price">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-2 col-form-label" for="stock">Stock</label>
          <div class="col-xl-10">
            <input v-model="product.stock" type="text" class="form-control" name="stock" id="stock" aria-describedby="stock" placeholder="Insert stock">
          </div>
        </div>
        <button type="submit" class="btn btn-primary col-xl-6">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    submitForm () {
      this.$store.dispatch('submitProduct', this.product)
    }
  },
  created () {
    this.product = this.$store.state.productToEdit
  }
}
</script>

<style>

</style>
