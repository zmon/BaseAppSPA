<template>
  <form class="form-signin card dark mt-5" @submit="submitForm">
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input
      v-model="username"
      type="email"
      id="inputEmail"
      class="form-control"
      placeholder="Email address"
      required
      autofocus
    />
    <label for="inputPassword" class="sr-only">Password</label>
    <input
      v-model="password"
      type="password"
      id="inputPassword"
      class="form-control"
      placeholder="Password"
      required
    />
    <div class="checkbox mb-3">
      <label> <input type="checkbox" value="remember-me" /> Remember me </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit">
      Sign in
    </button>
  </form>
</template>

<script lang="ts">
const axios = require("axios");

export default {
  name: "Login",
  props: {},
  data() {
    return {
      username: null,
      password: null,
    };
  },
  created() {},
  methods: {
    attemptLogin() {
      axios
        .post(process.env.VUE_APP_BASE_URL + "oauth/token", {
          username: this.username,
          password: this.password,
          grant_type: "password",
          client_id: process.env.VUE_APP_CLIENT_ID,
          client_secret: process.env.VUE_APP_CLIENT_SECRET,
        })
        .then((res) => {
          console.log(res);
          this.$store.commit("SET_TOKEN", res.data.access_token);
          this.$router.push("Organizations");
        })
        .catch((e) => {
          console.log(e);
          // alert(e)
          this.error = true;
        });
    },

    submitForm() {
      this.attemptLogin();
    },
  },
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
