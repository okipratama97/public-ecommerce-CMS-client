<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="login-main col-xl-6">
          <div class="card">
            <img class="login-image card-img-top" src="https://dummyimage.com/600x400/000/00ff1e.jpg&text=CMS+ADMIN" alt="">
            <div class="card-body">
              <h4 class="card-title">Login</h4>
              <form class="form" @submit.prevent="login">
                <div class="row justify-content-center">
                  <div class="form-group col-xl-9">
                    <input v-model="loginEmail" type="email" class="form-control" name="email" id="email" aria-describedby="email" placeholder="Enter your email">
                  </div>
                  <div class="form-group col-xl-9">
                    <input v-model="loginPassword" type="password" class="form-control" name="password" id="password" placeholder="Enter your password">
                  </div>
                  <div class="form-group col-xl-6">
                    <button type="submit" class="btn btn-primary">Login</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <small id="email" class="form-text text-muted">This website is for admin only</small>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      loginEmail: '',
      loginPassword: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('loginUser', { loginEmail: this.loginEmail, loginPassword: this.loginPassword })
    }
  }
}
</script>

<style scoped>
img.login-image {
  border-radius: 20%;
  width: 400px;
  margin:0 auto;
}

.login-main {
  margin-top: 200px;
}
</style>
