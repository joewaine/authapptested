<template>
  <div id="app">
    <!-- <PlasmicRootProvider :loader="this.loader"> -->
      <PlasmicComponent component="Homepage with Events" />
    <!-- </PlasmicRootProvider> -->
    <GlobalFooter />
  </div>
</template>

<script>
import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-vue";
import { PLASMIC } from "@/plasmic-init.js";
import GlobalFooter from "@/components/GlobalFooter";

export default {
  name: "PlasmicEvents",
  components: {
    PlasmicRootProvider,
    PlasmicComponent,
    GlobalFooter
  },
  
  computed: {
    loader() {
      return PLASMIC;
    },
  },
};
</script>
