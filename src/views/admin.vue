<template>
  <div class="mamnoon">
    <Nav3 />
<Admin :title="'Mamnoon'" :oloEndpoint="'/oloorder'" :menuEndpoint="'/product/upserveolo'" :emailAddress="$store.state.currentUserEmail" />
  </div>
</template>
<script>
import Admin from "@/components/Admin";
import Nav3 from "@/components/Nav3";
export default {
  components: {
    Nav3,
    Admin
  }
};
</script>

