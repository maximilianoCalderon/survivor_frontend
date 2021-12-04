<template>
  <v-ons-page>
    <Loader v-model="loading" />
    <v-ons-toolbar>
      <div class="center">Survivor - Recuperar Password</div>
    </v-ons-toolbar>
    <v-ons-card>
      <div class="content">
        <v-ons-list>
          <v-ons-list-item>
            <v-ons-input
              v-model="user.email"
              placeholder="Correo Electronico"
              type="email"
              style="width: 100%"
            ></v-ons-input>
          </v-ons-list-item>
          <v-ons-list-item>
            <v-ons-button @click="sendRecovery" modifier="large--quiet">
              Enviar Correo
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
  components: {
    Loader,
  },
  data() {
    return {
      user: new User(),
      loading: false,
    };
  },
  methods: {
    async sendRecovery() {
      try {
        this.loading = true;
        await this.user.sendRecovery();
        this.$toast.success(
          "El correo ha sido enviado con exito, favor de ingresar a su correo electronico",
          new Toast()
        );
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
