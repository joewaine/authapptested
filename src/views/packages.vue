<template>
  <div class="mamnoon">
    <Nav3 />
    <PackagesAdmin />

    <!-- {{$store.state.currentUserEmail}} -->
  </div>
</template>
<script>
import PackagesAdmin from "@/components/PackagesAdmin";
import Nav3 from "@/components/Nav3";
export default {
  data() {
    return {
      user: null,
    };
  },
  components: {
    Nav3,
    PackagesAdmin,
  },
};
</script>

