<template>
  <v-app>
    <app-bar />

    <v-main>
      <router-view />
      <v-overlay
        :value="getOverlay"
        @click="setOverlay(false)"
        class="d-flex justify-center align-center"
      >
        <v-img
          src="@/assets/mohamad-image.jpg"
          contain
          class="mx-auto"
          max-height="50%"
          max-width="50%"
        ></v-img>
      </v-overlay>
    </v-main>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    AppBar,
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(["getOverlay"]),
  },
  methods: {
    ...mapActions(["setOverlay"]),
  },
};
</script>
