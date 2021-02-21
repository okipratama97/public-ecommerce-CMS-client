<template>
  <div>
  <NavBar />
  <ProductForm />
  <div>
    <button class="btn btn-danger" @click.prevent="cancelForm">Cancel</button>
  </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ProductForm from '@/components/ProductForm.vue'

export default {
  components: { NavBar, ProductForm },
  methods: {
    cancelForm () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
