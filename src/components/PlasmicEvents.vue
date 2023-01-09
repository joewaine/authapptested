<template>
  <div id="app">
    <PlasmicRootProvider :loader="this.loader">
      <PlasmicComponent component="Events" componentProps="eventLocation" />
    </PlasmicRootProvider>
  </div>
</template>

<script>
import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-vue";
import { PLASMIC } from "@/plasmic-init.js";

export default {
  name: "PlasmicEvents",
  components: {
    PlasmicRootProvider,
    PlasmicComponent,
  },
  props: ["eventLocation"],
  computed: {
    loader() {
      return PLASMIC;
    },
  },
};
</script>
