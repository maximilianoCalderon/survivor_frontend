<template>
  <v-ons-page>
    <Loader v-model="loading" />
    <v-ons-toolbar>
      <div class="center">Survivor - Registro</div>
    </v-ons-toolbar>
    <v-ons-card>
      <div class="content">
        <v-ons-list>
          <v-ons-list-item>
            <label for="Nombre">Nombre</label>
            <v-ons-input v-model="user.name" style="width: 100%"></v-ons-input>
          </v-ons-list-item>
          <v-ons-list-item>
            <label for="Apellido">Apellido</label>
            <v-ons-input v-model="user.lastname" style="width: 100%"></v-ons-input>
          </v-ons-list-item>
          <v-ons-list-item>
            <label for="Email">E-mail</label>
            <v-ons-input v-model="user.email" style="width: 100%"></v-ons-input>
          </v-ons-list-item>
          <v-ons-list-item>
            <label for="Nacimiento">Fecha Nacimiento</label>
            <v-ons-input
              type="date"
              v-model="user.birthday"
              style="width: 100%"
            ></v-ons-input>
          </v-ons-list-item>
          <v-ons-list-item>
            <label for="Usuario">Usuario</label>
            <v-ons-input v-model="user.username" style="width: 100%"></v-ons-input>
          </v-ons-list-item>
          <v-ons-list-item>
            <label for="Password">Password</label>
            <v-ons-input
              type="password"
              v-model="user.password"
              style="width: 100%"
            ></v-ons-input>
          </v-ons-list-item>
          <v-ons-list-item>
            <label for="Repetir Password">Repetir Password</label>
            <v-ons-input
              type="password"
              v-model="password2"
              style="width: 100%"
            ></v-ons-input>
          </v-ons-list-item>
          <v-ons-list-item>
            <v-ons-button
              @click="register()"
              style="background-color: teal"
              modifier="large"
            >
              Registrarse
            </v-ons-button>
          </v-ons-list-item>
          <v-ons-list-item>
            <v-ons-button modifier="large" @click="login()">
              Regresar Login
            </v-ons-button>
          </v-ons-list-item>
        </v-ons-list>
      </div>
    </v-ons-card>
  </v-ons-page>
</template>

<script>
import Loader from "../components/utilities/Loader.vue";
import { User } from "../utilities/entities/User";
import { Toast } from "../utilities/toast";

export default {
  data() {
    return {
      loading: false,
      colors: ["Red", "Green", "Blue"],
      checkedColors: ["Green", "Blue"],
      user: new User(),
      password2: "",
    };
  },
  components: {
    Loader,
  },
  methods: {
    async register() {
      this.loading = true;
      try {
        await this.user.register();
        await this.user.sendConfirmation();
        this.$toast.success(
          "Registro exitoso, favor de verificar su correo electronico y confirmar el registro",
          new Toast()
        );
        this.$router.push("/Login");
      } catch (error) {
        if (error.response.data.message) {
          this.$toast.error(error.response.data.message, new Toast());
        } else if (error.response.message) {
          this.$toast.error(error.message, new Toast());
        } else {
          this.$toast.error(error, new Toast());
        }
      } finally {
        this.loading = false;
      }
    },
    login() {
      this.$router.push("/Login");
    },
  },
};
</script>

<style>
.register {
  background-color: teal;
}
</style>
