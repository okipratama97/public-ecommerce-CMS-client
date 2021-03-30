<template>
  <tr>
    <th scope="row">{{product.id}}</th>
    <td>{{product.name}}</td>
    <td><img class="product-image" :src="product.image_url" :alt="product.name"></td>
    <td>{{product.price}}</td>
    <td>{{product.stock}}</td>
    <td><button class="btn btn-secondary" :id="product.id" @click.prevent="editProduct(product.id)">Edit</button> || <button class="btn btn-danger" :id="product.id" @click.prevent="deleteProduct(product.id)">Delete</button></td>
  </tr>
</template>

<script>
export default {
  props: {
    product: Object
  },
  methods: {
    editProduct (id) {
      this.$store.dispatch('productToEdit', this.product)
      this.$router.push({ name: 'Edit', params: { id } })
    },
    deleteProduct (id) {
      console.log(id)
      this.$store.dispatch('deleteProduct', id)
    }
  }
}
</script>

<style>
.product-image {
  max-width: 120px;
}
</style>
