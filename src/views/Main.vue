<template>
  <v-ons-splitter>
    <v-ons-splitter-side
      swipeable
      width="250px"
      collapse=""
      side="left"
      :open.sync="openSide"
    >
      <v-ons-page>
        <v-ons-card>
          <div style="text-align: center">
            <div class="title">{{ this.$session.get("username") }}</div>
          </div>
        </v-ons-card>
        <v-ons-list>
          <v-ons-list-item
            v-for="page in pages"
            tappable
            :key="page.name"
            @click="go(page)"
          >
            <div class="left">
              <v-ons-icon :icon="page.icon" class="list-item__icon"></v-ons-icon>
            </div>
            <div class="center">
              {{ page.name }}
            </div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <component
        :is="currentPage"
        :toggle-menu="() => (openSide = !openSide)"
      ></component>
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
import { Toast } from "../utilities/toast";
import clasificacion from "../components/Clasificacion.vue";
import temporadaSurvivor from "../components/SurvivorSeason.vue";
import home from "../components/Home.vue";
import partidos from "../components/Partidos.vue";
import perfil from "../components/Perfil.vue";
import eleccion from "../components/Eleccion.vue";
import historial from "../components/Historial.vue";
export default {
  data() {
    return {
      currentPage: "Inicio",
      pages: [
        {
          icon: "fa-home",
          name: "Inicio",
          route: "Inicio",
        },
        {
          icon: "fa-futbol",
          name: "Partidos",
          route: "Partidos",
        },
        {
          icon: "fa-table",
          name: "Clasificacion",
          route: "Clasificacion",
        },
        {
          icon: "fa-history",
          name: "Mi Historial",
          route: "Historial",
        },
        {
          icon: "fa-futbol",
          name: "Temporada Survivor",
          route: "TemporadaSurvivor",
        },
        {
          icon: "fa-calendar-week",
          name: "Eleccion Semanal",
          route: "Eleccion",
        },
        {
          icon: "fa-user",
          name: "Perfil",
          route: "Perfil",
        },
        {
          icon: "fa-sign-out-alt",
          name: "Salir",
          route: "Salir",
        },
      ],
      openSide: false,
    };
  },
  components: {
    Inicio: home,
    Partidos: partidos,
    Perfil: perfil,
    Eleccion: eleccion,
    Historial: historial,
    Clasificacion: clasificacion,
    TemporadaSurvivor: temporadaSurvivor,
  },
  mounted() {
    if (!this.$session.exists("username")) {
      this.$toast.error("Session no activa, favor de logearse", new Toast());
      this.$router.push("/Login");
    }
  },
  methods: {
    go(page) {
      if (page.route == "Salir") {
        this.$session.clear();
        this.$router.push("/Login");
      } else {
        this.currentPage = page.route;
        this.openSide = false;
      }
    },
  },
};
</script>

<style></style>
