<template>
  <v-container>
    <h1>Register</h1>
    <UserAuthForm buttonText="Register" :submitForm="registerUser" :hasName="true" />
  </v-container>
</template>

<script>
import UserAuthForm from "@/components/UserAuthForm";
export default {
  components: {
    UserAuthForm
  },
  methods: {
    async registerUser(registroInfo) {
      
      const userRegister ={
        email:registroInfo.email,
        name:registroInfo.name,
        password:registroInfo.password
      }
      await this.$axios.post('api/user/register',userRegister)
      this.$auth.loginWith("local", { 
        data: userRegister
      });
    }
  }
};
</script>