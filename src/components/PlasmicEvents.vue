<template>
  <div id="app">
    <PlasmicRootProvider
      prefetchedData="{plasmicData}"
      prefetchedQueryData="{queryCache}"
    >
      <PlasmicComponent component="Events" />
    </PlasmicRootProvider>
  </div>
</template>

<script>
import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-vue";
import { PLASMIC } from "@/plasmic-init.js";

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
  },
  methods: {
    async retrieveComponentData() {
      plasmicData = await PLASMIC.fetchComponentData("Events");
      queryCache = await extractPlasmicQueryData(
        <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
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
