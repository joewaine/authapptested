<template>
  <div class="mamnoon">
    <Nav3 />
    <!-- <UpserveOloTestingNewProcessing :title="'Mamnoon Street'" :oloEndpoint="'/oloorderstreet'" :menuEndpoint="'/product/upserveolo'" :userData="user" :emailAddress="$store.state.currentUserEmail" /> -->
    <UpserveOloTestingNewProcessing
      :title="'Mamnoon Street'"
      :oloEndpoint="'/order/oloorderstreet'"
      :menuEndpoint="'/product/upserveolo'"
      :userData="user"
      :emailAddress="$store.state.currentUserEmail"
    />

    <!-- {{$store.state.currentUserEmail}} -->
  </div>
</template>
<script>
import UpserveOloTestingNewProcessing from "@/components/UpserveOloTestingNewProcessing";
import Nav3 from "@/components/Nav3";
export default {
  data() {
    return {
      user: null,
    };
  },
  components: {
    Nav3,
    UpserveOloTestingNewProcessing,
  },
  methods: {
    getUser() {
      let self = this;
      this.$http
        .get("/user/email/" + self.$store.state.currentUserEmail)
        .then(function(response) {
          let userInfo = response.data;
          // console.log(userInfo);
          self.user = userInfo;
          self.cardNumberInput = userInfo.user.giftcard;
          self.preferredGiftCard = userInfo.user.giftcard;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

