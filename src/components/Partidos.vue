<template>
    <v-ons-page>
    <CustomToolbar title="Partidos" :action="toggleMenu" />
  <p>Jornada 9</p>
    <v-ons-card>
      <div class="content">
        <ons-row>
          <ons-col>
            <img class="center-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Club_de_F%C3%BAtbol_Monterrey_2019_Logo.svg/416px-Club_de_F%C3%BAtbol_Monterrey_2019_Logo.svg.png" 
            alt="" width="35px">
          </ons-col>
          <ons-col><div style="text-align:center;">
            <h3>2  -  0</h3></div></ons-col>
          <ons-col><img class="center-image" src="https://upload.wikimedia.org/wikipedia/en/8/82/Tigres_UANL_logo_%28crest%29.svg" 
            alt="" width="35px"></ons-col>
        </ons-row>
      </div>
    </v-ons-card>
    <v-ons-card>
      <div class="content">
        <ons-row>
          <ons-col>
            <img class="center-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Club_de_F%C3%BAtbol_Monterrey_2019_Logo.svg/416px-Club_de_F%C3%BAtbol_Monterrey_2019_Logo.svg.png" 
            alt="" width="35px">
          </ons-col>
          <ons-col><div style="text-align:center;">
            <h3>2  -  0</h3></div></ons-col>
          <ons-col><img class="center-image" src="https://upload.wikimedia.org/wikipedia/en/8/82/Tigres_UANL_logo_%28crest%29.svg" 
            alt="" width="35px"></ons-col>
        </ons-row>
      </div>
    </v-ons-card>
    <v-ons-card>
      <div class="content">
        <ons-row>
          <ons-col>
            <img class="center-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Club_de_F%C3%BAtbol_Monterrey_2019_Logo.svg/416px-Club_de_F%C3%BAtbol_Monterrey_2019_Logo.svg.png" 
            alt="" width="35px">
          </ons-col>
          <ons-col><div style="text-align:center;">
            <h3>2  -  0</h3></div></ons-col>
          <ons-col><img class="center-image" src="https://upload.wikimedia.org/wikipedia/en/8/82/Tigres_UANL_logo_%28crest%29.svg" 
            alt="" width="35px"></ons-col>
        </ons-row>
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