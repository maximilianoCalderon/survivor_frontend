<template>
    <v-ons-page>
    <CustomToolbar title="Historial" :action="toggleMenu" />
    <v-ons-card>
      <div class="content">
        <p>Los partidos ganados estaran marcados de color verde, los perdidos rojos, y los pendientes sin color.</p>
      </div>
    </v-ons-card>
    <v-ons-card style="background-color: #51bd57;">
      <img class="center-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Club_de_F%C3%BAtbol_Monterrey_2019_Logo.svg/416px-Club_de_F%C3%BAtbol_Monterrey_2019_Logo.svg.png" 
                  alt="" width="35px"><br>
      <div style="text-align:center;">
        Jornada 1
      </div>
    </v-ons-card>
  </v-ons-page>
</template>

<script>
import CustomToolbar from './CustomToolbar.vue';
export default {
  props: ["toggleMenu"],
  components: { CustomToolbar },
};
</script>

<style>
  .center-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>