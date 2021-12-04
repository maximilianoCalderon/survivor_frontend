<template>
    <v-ons-page>
    <CustomToolbar title="Perfil" :action="toggleMenu" />
    <v-ons-card>
      <div class="content">
        <ons-row>
          <ons-col>
            <img 
                class="center-image" 
                src="https://tienda.elsardinero.com/wp-content/uploads/2017/09/user.png" 
                alt="" width="65px">
          </ons-col>
          
        </ons-row>
        <br>
        <ons-row>
            <v-ons-list  style="width: 100%">
                 <v-ons-list-item>
                    <v-ons-input
                    float
                    placeholder="Usuario"
                    style="width: 100%"
                    ></v-ons-input>
                </v-ons-list-item>
                <v-ons-list-item>
                    <v-ons-input
                    float
                    placeholder="Nombre"
                    style="width: 100%"
                    ></v-ons-input>
                </v-ons-list-item>
                 <v-ons-list-item>
                    <v-ons-input
                    float
                    placeholder="Apellidos"
                    style="width: 100%"
                    ></v-ons-input>
                </v-ons-list-item>
                 <v-ons-list-item>
                    <v-ons-input
                    float
                    placeholder="Fecha Nacimiento"
                    style="width: 100%"
                    ></v-ons-input>
                </v-ons-list-item>
            </v-ons-list>
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