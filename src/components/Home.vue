<template>
  <v-ons-page>
    <CustomToolbar title="Inicio" :action="toggleMenu" />
    <v-ons-card>
      <div
        class="center"
        style="
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 75%;
        "
      >
        <img src="../assets/logo.png" alt="Onsen UI" style="width: 100%" />
      </div>
      <div class="content">
        <p>
          Bienvenido a BET SOCCER SURVIVOR, la aplicacion de apuestas en modo
          survivor para ligas de futbol.
        </p>
      </div>
    </v-ons-card>
  </v-ons-page>
</template>

<script>
import CustomToolbar from "./CustomToolbar.vue";
export default {
  props: ["toggleMenu"],
  components: { CustomToolbar },
};
</script>

<style>
</style>