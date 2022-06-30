<template>
  <div class="hanoonContents">
    <div class="holderHanoon">
      <div class="col-md-4">
        <div class="logoHanoon" v-html="this.pageData[4].logo_svg"></div>
        <div class="locationHanoon">
          <p>opening june 2022</p>
          <br />
          <p>totem lake</p>
          <p>12670 120th ave ne,</p>
          <p>kirkland, wa 98034</p>
        </div>
      </div>
      <div class="col-md-4"></div>
      <div class="hanoonJobs">
        <div class="hanoon">
          <div class="nowHiring">
            <span class="listTitle">floor</span>
            <br />
            <span class="listItem"
              >server -
              <a
                href="https://www.indeed.com/pagead/clk?mo=r&ad=-6NYlbfkN0CfOc02hfXIfpRYytjbVFCqS5rPRB2Ki20AXF6CYzXacmUympAdN-Xamw6XZtX1LDiFAO_DLm5eWFEwx53JJ4JpqcRDB14-i7aySrLTGjbLZOOlTix3v4S_bF3QTGIOiyzYqakAx0S3creAl7a-kdhzUyQPlDtk-9D9RMxAHWF0_yZLpADapkOfgiTHyqy9UusORw9mI-UbkYstnTiuWlXrWkbFLHVaPXgJRcJNjkw8aPLfhPFChP4d1WdtcQf4-afIDf8W6siBJhL4BVPdtl8x3k6u6r9_AqksUFQv8sOiBRb-UqetFg9CQe9QODrcC3SJsUaSdZSNLIy0YrfybqhHcNRXRZTZmH1mpE53eO5QPKzh1LSoJNsMgz81Uit3zN8a_96embIVBLX9zee5SxbupQNq_uXH3GfwZ5FMhpEt_3gKGUS0YTQjHHNf4jv7BJNfEafGFg2yllEtzIcZbBp83X_UZAe4zN7PXCRG4VWUBQr1VI6AzNWNqTb2J5vQ15I=&xkcb=SoDf-_M3cameVcSKAR0LbzkdCdPP&p=0&fvj=1&vjs=3&tk=1g6qn4cacgfrn800&jsa=8780"
                >apply here</a
              ></span
            >
            <br />
            <!-- <span class="listItem"
              >server assistant -
              <a
                href="https://www.indeed.com/jobs?q=mama%20restaurant%20group&l=Seattle%2C%20WA&vjk=aa7669a48616dfc4"
                >apply here</a
              ></span
            >
            <br />
            <span class="listItem"
              >host -
              <a
                href="https://www.indeed.com/jobs?q=mama%20restaurant%20group&l=Seattle%2C%20WA&vjk=cf6ee5f8f94a80f2"
                >apply here</a
              ></span
            > -->
            <!-- <br>
            <span class="listItem">dishwasher - <a href="https://www.indeed.com/jobs?q=mama%20restaurant%20group&l=Seattle%2C%20WA&vjk=8ab8b42f6599770d">apply here</a></span> -->
          </div>
          <div class="nowHiring">
            <span class="listTitle">bar</span>
            <br />
            <span class="listItem"
              >bartender -
              <a
                href="https://www.indeed.com/pagead/clk?mo=r&ad=-6NYlbfkN0CfOc02hfXIfpRYytjbVFCqS5rPRB2Ki20AXF6CYzXacmUympAdN-XaQSqSZtNL4wAIPIY-jVdQ2kOYfYZH7oF2uXclvdU23mdRNiFj91enKaNO8JPO7j2iTzkErex7FcB7s69fbaOWqhhKTtG8NXtLw0_5R590L8jIKG1SYOPDqauYlKHej2WukQ7_rmns2ih2bmGD8ydgucijYSwpzV4P4AG-fWjT_DpVeWweUjO-_93zYmygsPyO0hFxJb_d0RutEhAJy2U2DBkU93bGkC3BBfMwdYR38fldhugpxmhsEirQxpIoEs8DTj5RskZzHypwuJXA01IluGw2KWzpag-9EIjyMX565crVwUnF8PVHKQH0BBogUZD0or43BU9CrWuhHrMh1ZRq4yWsti5z3llJs9wVpHOgFXS0wWq8iVkm-r0-BcLJbVdSW6LWnCSZ6x-W5ZWpSj6oRZEDzPY23WXILnHE-8hoVtEkU3j9MmCvHuUKplRNJzU5qnR58Ho5kaKlp1gFlslSOw==&xkcb=SoAu-_M3cameVcyKAR0KbzkdCdPP&p=1&fvj=1&vjs=3&tk=1g6qn4cacgfrn800&jsa=8780"
                >apply here</a
              ></span
            >
            <br />
          </div>
          <div class="nowHiring">
            <span class="listTitle">management</span>
            <br />
            <span class="listItem"
              >sous chef -
              <a
                href="https://poachedjobs.com/jobs/kirkland-wa-kitchen-jobs-hanoon-dollar60k-sous-chef-new-restaurant?from=jobs&rec=false"
                >apply here</a
              ></span
            >
            <br />
            <!-- <span class="listItem">general manager - <a href="https://www.indeed.com/job/general-manager-new-restaurant-opening-7bcfa509dd53432b">apply here</a></span>
            <br> -->
            <span class="listItem"
              >front of house manager -
              <a
                href="https://poachedjobs.com/jobs/seattle-wa-management-jobs-mamnoon-foh-floor-manager?from=jobs&rec=false"
                >apply here</a
              ></span
            >
          </div>
          <div class="nowHiring">
            <span class="listTitle">kitchen</span>
            <br />
            <!-- <span class="listItem"
              >prep cook -
              <a
                href="https://www.indeed.com/jobs?q=mama%20restaurant%20group&l=Seattle%2C%20WA&vjk=2a527043db991e0d"
                >apply here</a
              ></span
            >
            <br /> -->
            <span class="listItem"
              >line cook -
              <a
                href="https://www.indeed.com/pagead/clk?mo=r&ad=-6NYlbfkN0CfOc02hfXIfpRYytjbVFCqS5rPRB2Ki20AXF6CYzXacmUympAdN-XaI9lQGA2CMuqDXtqIXLz_4XufQQEEwaKPLB0lPkG2PvphWHlxHLOJ9uu3It-YBCBBgSu48Bq0ZJcADBeMvRdPJV9D8GSD_TQdMKRRT8Au6fc2ZSV5WvBBbYDL-RcG0V8k2EC9lJGWtUmfpHDGfAciEYEY_A7UzhaRUy3jddy9qQ_RoPYV07_kMPgyXFLdTKiUdwhyCp3KBpbK684CScWMz3asvPobGdXYxCI4DjwMlP8i0Q5cNgNauuJOTqzmP244YBUWRJ_b4ZeXVKuPrwDu-GkbnCE2aW7wDLrTvxRDuTzu2c0gOXVxdLcTpsgvQr2FlOVuWw4RD-naZQEUMcjUZi2Kxxr5wkxmVIAKjK1vLOmUXxHWNODKGDOc7nJw2plGa4fO07xKA87iYKQ-iWzbX_n0Npm5TR-q1xKxMC_6UKjwJ9Vbqeoe7BCaiTuu6OBsxKRtEbFJaKMslYy7bQZ6HA==&xkcb=SoAH-_M3cameVcyKAR0IbzkdCdPP&p=2&fvj=1&vjs=3&tk=1g6qn4cacgfrn800&jsa=8780"
                >apply here</a
              ></span
            >
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageData: null,
      logoArray: [],
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
@import "@/assets/styles/css/hanoon.scss";
</style>
