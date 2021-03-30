<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Dashboard</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="ml-auto"  style="display: 'inline-block';">
        <button class="btn btn-danger"  @click.prevent="logout">
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
