<template>
  <v-app>
    <v-app-bar app color="red">
      <v-btn text to="/">Videos SHOCK</v-btn>
      <v-btn text to="/videos">Videos</v-btn>
      <v-spacer/>
      <!-- /$auth.loggedIn es una propidedad del modulo auth que retoranr un bolean si esta logeado o no -->
      <div v-if="$auth.loggedIn">
        {{$auth.user.email}}
      <!-- /$auth.logout() es un metodo que para eliminar el token del navegador y aparte ejecuta una funcion en el api en las confuguraciones de nuxt-->
        <v-btn text @click="$auth.logout()">Cerrar Session</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div>
    </v-app-bar>
    <!-- <div id="navbar">
      <div class="navbar-links">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/videos">Videos</nuxt-link>
      </div>
    </div>-->
    <v-content>
      <nuxt />
    </v-content>
    <footer>adasdasd</footer>
  </v-app>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
