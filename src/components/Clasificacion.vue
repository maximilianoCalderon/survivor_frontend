<template>
  <v-ons-page>
    <CustomToolbar title="Temporada Survivor" :action="toggleMenu" />
    <v-ons-list-title>Clasificacion</v-ons-list-title>
    <v-ons-list>
       <v-ons-list-item>
         <div class="left">
        </div>
        <ons-row>
          <ons-col></ons-col>
          <ons-col>PJ</ons-col>
          <ons-col>G</ons-col>
          <ons-col>E</ons-col>
          <ons-col>P</ons-col>
          <ons-col>GF</ons-col>
          <ons-col>GC</ons-col>
          <ons-col>DG</ons-col>
          <ons-col>PTS</ons-col>
        </ons-row>
      </v-ons-list-item>
      <v-ons-list-item>
         <div class="left">
          <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
        </div>
        <ons-row>
          <ons-col>12</ons-col>
          <ons-col>7</ons-col>
          <ons-col>4</ons-col>
          <ons-col>1</ons-col>
          <ons-col>16</ons-col>
          <ons-col>7</ons-col>
          <ons-col>9</ons-col>
          <ons-col>25</ons-col>
        </ons-row>
      </v-ons-list-item>
      <v-ons-list-item v-for="i in 18" :key="i">
         <div class="left">
          <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
        </div>
        <ons-row>
          <ons-col>12</ons-col>
          <ons-col>7</ons-col>
          <ons-col>4</ons-col>
          <ons-col>1</ons-col>
          <ons-col>16</ons-col>
          <ons-col>7</ons-col>
          <ons-col>9</ons-col>
          <ons-col>25</ons-col>
        </ons-row>
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