<template>
  <v-app-bar app color="primary" dark dense elevation="5" outlined>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <v-list color="transparent">
      <v-list-item color="transparent">
        <v-list-item-avatar @click="setOverlay(true)">
          <v-img src="@/assets/mohamad-image.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title> Mohamad Al Omar </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AppBar",
  data() {
    return {
      overlay: false,
    };
  },
  methods: {
    ...mapActions(["setOverlay"]),
  },
};
</script>

<style></style>
