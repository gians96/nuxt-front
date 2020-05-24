<template>
  <v-container>
    <h1>Login</h1>
    <UserAuthForm buttonText="Login" :submitForm="loginUser" />
  </v-container>
</template>

<script>
import UserAuthForm from "@/components/UserAuthForm";
export default {
  components: {
    UserAuthForm
  },
  methods: {
    loginUser(loginInfo) {
      
      // this.auth.loginWith da referencia a la configuracion dentro de nuxt.config.js
      //
      const userlogin ={
        email:loginInfo.email,
        password:loginInfo.password
      }
      this.$auth.loginWith("local", { 
        data: userlogin
      });
      //en la documentacion data: tiene las propiedades de email y password por defecto para inicio de sesiones
      //la funcion LoginUser dentro del el contiene todas las propiedades que tienee esta en UserAuthForm en user info
      console.log(loginInfo);
      
      console.log(this.$auth);
      
    }
  }
};
</script>