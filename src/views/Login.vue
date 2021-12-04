<template>
  <v-ons-page>
    <Loader v-model="loading" />
    <v-ons-toolbar>
      <div class="center">Survivor - Login</div>
      <!-- <div class="right">
        <v-ons-toolbar-button
          icon="ion-ios-menu, material: md-menu"
        ></v-ons-toolbar-button>
      </div> -->
    </v-ons-toolbar>

    <!-- <v-ons-row>
      <v-ons-col width="50px"
        ><v-ons-icon icon="fa-twitter"></v-ons-icon
      ></v-ons-col>
      <v-ons-col>Text</v-ons-col>
    </v-ons-row> -->
    <v-ons-card>
      <div
        class="center"
        style="display: block; margin-left: auto; margin-right: auto; width: 75%"
      >
        <img src="../assets/logo.png" alt="Onsen UI" style="width: 100%" />
      </div>
      <div class="content">
        <v-ons-list>
          <v-ons-list-item>
            <v-ons-input
              v-model="user.username"
              placeholder="Usuario"
              style="width: 100%"
            ></v-ons-input>
          </v-ons-list-item>
          <v-ons-list-item>
            <v-ons-input
              v-model="user.password"
              placeholder="Password"
              type="password"
              style="width: 100%"
            ></v-ons-input>
          </v-ons-list-item>
          <v-ons-list-item>
            <v-ons-button modifier="large" @click="login()">Login</v-ons-button>
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
            <v-ons-button @click="passwordReset" modifier="large--quiet">
              Olvidaste la contraseña?
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
  components: {
    Loader,
  },
  data() {
    return {
      loading: false,
      user: new User(),
      colors: ["Red", "Green", "Blue"],
      checkedColors: ["Green", "Blue"],
    };
  },
  methods: {
    register() {
      this.$router.push("/Register");
    },
    passwordReset() {
      this.$router.push("/Password");
    },
    async login() {
      try {
        this.loading = true;
        let user = await this.user.login();
        console.log(user);
        if (user.is_confirmed == 0) {
          throw "Favor de verificar el correo electronico y validar el usuario";
        }

        this.$session.set("username", user.username);
        this.$session.set("name", user.name);
        this.$session.set("lastname", user.lastname);
        this.$session.set("email", user.email);
        this.$router.push("/Main");
      } catch (error) {
        if (error.response) {
          this.$toast.error(error.response.data.message, new Toast());
        } else {
          this.$toast.error(error, new Toast());
        }
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
