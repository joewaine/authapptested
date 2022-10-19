<template>
  <div id="app">
    <PlasmicRootProvider :loader="this.loader">
      <PlasmicComponent component="menu-test" />
    </PlasmicRootProvider>
  </div>
</template>

<script>
import { PlasmicRootProvider, PlasmicComponent } from '@plasmicapp/loader-vue';
import { PLASMIC } from '../plasmic-init';

export default {
  name: 'menu-test',
  components: {
    PlasmicRootProvider,
    PlasmicComponent
  },
  computed: {
    loader() {
      return PLASMIC;
    }
  }
};
</script>