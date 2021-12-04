<template>
  <v-ons-page>
    <CustomToolbar title="Temporada Survivor" :action="toggleMenu" />
    <v-ons-list-title>Sobrevivientes</v-ons-list-title>
    <v-ons-list>
      <v-ons-list-item>
        <div class="left">
          <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
        </div>
        <div class="center">
          <span class="list-item__title">Maximiliano Calderon</span>
          <span class="list-item__subtitle">maxzxa</span>
          <span class="list-item__subtitle">
            <v-ons-icon icon="fa-heart" class="list-item__icon"></v-ons-icon>
            <v-ons-icon icon="fa-heart" class="list-item__icon"></v-ons-icon>
          </span>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="left">
          <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
        </div>
        <div class="center">
          <span class="list-item__title">Jorge Medellin</span>
          <span class="list-item__subtitle">jmed23</span>
          <span class="list-item__subtitle">
            <v-ons-icon icon="fa-heart" class="list-item__icon"></v-ons-icon>
            <v-ons-icon icon="fa-heart-broken" class="list-item__icon"></v-ons-icon>
          </span>
        </div>
      </v-ons-list-item>
    </v-ons-list>
    <v-ons-list-title>Eliminados</v-ons-list-title>
    <v-ons-list>
       <v-ons-list-item>
        <div class="left">
          <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
        </div>
        <div class="center">
          <span class="list-item__title">Alondra Martinez</span>
          <span class="list-item__subtitle">alemtz43</span>
          <span class="list-item__subtitle">
            Eliminada en Jornada 5
          </span>
        </div>
      </v-ons-list-item>
    </v-ons-list>
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
.center-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>