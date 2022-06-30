<template>
  <div class="mbarContents">
    <div class="holderMbar">
      <div class="col-md-4">
        <div class="logoMbar" v-html="this.pageData[0].logo_svg"></div>
        <div class="locationMbar">
          <p>south lake union</p>
          <p>400 fairview ave n</p>
          <p>seattle, wa 98109</p>
        </div>
      </div>
      <div class="col-md-4"></div>
        <div class="openings">
          <span class="listTitleMbar">kitchen</span>
          <p>
            <span class="listItemMbar"
              >line cook -&nbsp;
              <a
                href="https://www.indeed.com/cmp/Mamnoon-1/jobs?jk=2be3c04b50dcb1c4"
                >apply here</a
              ></span
            >
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      pageData: null,
    };
  },
  methods: {
    getLogos() {
      this.pageData = this.$store.state.pageData[0].restaurant_repeater;
    },
  },
  mounted() {
    this.getLogos();
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/css/mbar.scss";
</style>
