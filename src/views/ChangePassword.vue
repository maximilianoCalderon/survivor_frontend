<template>
  <v-ons-page>
    <Loader v-model="loading" />
    <v-ons-toolbar>
      <div class="center">Survivor - Cambiar Password</div>
    </v-ons-toolbar>
    <v-ons-card>
      <div class="content">
        <v-ons-list>
          <v-ons-list-item>
            <v-ons-input
              placeholder="Nueva Password"
              type="password"
              style="width: 100%"
              v-model="user.password"
            ></v-ons-input>
          </v-ons-list-item>
          <v-ons-list-item>
            <v-ons-input
              placeholder="Confirmar Password"
              type="password"
              style="width: 100%"
              v-model="user.oldPassword"
            ></v-ons-input>
          </v-ons-list-item>
          <v-ons-list-item>
            <v-ons-button @click="changePassword" modifier="large--quiet">
              Cambiar Password
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
import { translateError } from "../utilities/error";
export default {
  props: {
    username: {
      type: String,
      default: "",
    },
  },
  components: { Loader },
  data() {
    return {
      user: new User(),
      loading: false,
    };
  },
  mounted() {
    this.user.username = this.username;
  },
  methods: {
    async changePassword() {
      try {
        this.loading = true;
        if (this.user.password != this.user.oldPassword) {
          throw "Error. Las contraseñas deben de coincidir";
        }
        // Validar que haya una peticion de recuperacion
        let validation = await this.user.passwordRequest();
        if (validation.password_lost == 0) {
          throw "No puede guardar la password, error de seguridad detectado";
        }
        await this.user.changePassword();
        this.$toast.success("Contraseña cambiada con exito", new Toast());
        this.$router.push("/");
      } catch (error) {
        this.$toast.error(translateError(error), new Toast());
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
.register {
  background-color: teal;
}
</style>
