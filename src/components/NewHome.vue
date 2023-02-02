<template>
  <div id="app">
    <!-- <PlasmicRootProvider :loader="this.loader"> -->
      <PlasmicRootProvider
      :prefetchedData="plasmicData"
      :prefetchedQueryData="queryCache"
      :loader="this.loader" 
    >
      <PlasmicComponent component="Homepage with Events" />
    </PlasmicRootProvider>
    <GlobalFooter />
  </div>
</template>

<script>
import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-vue";
import { PLASMIC } from "@/plasmic-init.js";
import GlobalFooter from "@/components/GlobalFooter";

export default {
  name: "PlasmicEvents",
  data() {
    return {
      queryCache: "",
      plasmicData: "",
    }
  },
  components: {
    PlasmicRootProvider,
    PlasmicComponent,
    GlobalFooter
  },
  methods: {
    async retrieveComponentData() {
      plasmicData = await PLASMIC.fetchComponentData("Events");
      queryCache = await extractPlasmicQueryData(
        <PlasmicRootProvider prefetchedData={plasmicData}>
          <PlasmicComponent component="Events" />
        </PlasmicRootProvider>
      );
    }
  },
  computed: {
    loader() {
      return PLASMIC;
    },
  },
};
</script>
