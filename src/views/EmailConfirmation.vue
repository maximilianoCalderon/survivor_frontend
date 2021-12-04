<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Survivor - Confirmacion</div>
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
      <div class="center" style=" display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;">
<img
        src="../assets/logo.png"
        alt="Onsen UI"
        style="width: 100%;"
      />
      </div>
      <div class="content">
        <v-ons-list>
          <v-ons-list-item>
            <p>Se ha enviado un correo a la direccion <a href="prueba@hotmail.com">prueba@hotmail.com</a>. Favor de confirmar para continuar
            con el registro.</p>
          </v-ons-list-item>
          <v-ons-list-item>
            <v-ons-button modifier="large--quiet">
              Reenviar confirmacion
            </v-ons-button>
          </v-ons-list-item>
        </v-ons-list>
      </div>
    </v-ons-card>
  </v-ons-page>
</template>

<script>
export default {
  data() {
    return {
      colors: ["Red", "Green", "Blue"],
      checkedColors: ["Green", "Blue"],
    };
  },
};
</script>

<style>
.register {
  background-color: teal;
}
</style>