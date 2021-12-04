<template>
  <v-ons-page>
    <Loader v-model="loading" />
    <CustomToolbar title="Eleccion Semanal" :action="toggleMenu" />
    <v-ons-card>
      <div class="content">
        <ons-row>
          <vue-select-image
            w="45"
            h="60"
            :dataImages="teams"
            @onselectimage="selectedTeam"
          >
          </vue-select-image>
        </ons-row>
        <br />
        <ons-row>
          <v-ons-button @click="confirmTeam" modifier="large">
            Confirmar Eleccion
          </v-ons-button>
        </ons-row>
      </div>
    </v-ons-card>
  </v-ons-page>
</template>

<script>
import Loader from "./utilities/Loader.vue";
import { Team } from "../utilities/entities/Team.js";
import CustomToolbar from "./CustomToolbar.vue";
import { Toast } from "../utilities/toast";
export default {
  props: ["toggleMenu"],
  data() {
    return {
      teamSelected: null,
      loading: false,
      team: new Team(),
      teams: [],
    };
  },
  components: { CustomToolbar, Loader },
  async mounted() {
    this.loading = true;
    try {
      const teams = await this.team.all();
      this.teams = teams.map((x) => {
        return {
          id: x.id,
          src: x.img_url,
          alt: x.name,
        };
      });
    } catch (error) {
      this.$toast.error(error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    confirmTeam() {
      this.$ons.notification
        .confirm("Desea escoger a " + this.teamSelected.alt + "?", {
          buttonLabels: ["CANCELAR", "CONFIRMAR"],
          title: "Seleccion de equipo",
        })
        .then((res) => {
          if (res == 1) {
            this.$toast.success("Equipo elegido", new Toast());
          }
        });
    },
    selectedTeam(team) {
      console.log(team);
      this.teamSelected = team;
    },
  },
};
</script>

<style>
.center-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
