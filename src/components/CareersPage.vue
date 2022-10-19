<template>
  <div>
    <Nav3 />
    <div class="col-md-8 m-auto p-auto">
      <Logos />
    </div>
    <div class="main-content">
      <h5>work for mama</h5>
      <p>
        interested in joining mama's team? we're always looking for qualified
        applicants, and can't wait to hear from you.
      </p>
      <p>
        when submitting your cover letter and resume, please be sure that all
        attachments are in pdf format.
      </p>
      <p>
        see all of our current openings at <a href="https://poachedjobs.com/jobs/all/everywhere?q=mamarg">poached</a> and <a href="https://www.indeed.com/jobs?q=mama+restaurant+group&l=Seattle%2C+WA&from=searchOnHP&vjk=06fae830f451e40a">indeed</a>
      </p>
    </div>
    <div>
      <NoOpenings />
    </div>
    <!-- spot for image -->
    <footer>
      <GlobalFooter />
    </footer>
  </div>
</template>
<script>
import Nav3 from "@/components/Nav3";
import GlobalFooter from "@/components/GlobalFooter";
import Logos from "@/components/Logos";
import NoOpenings from "@/components/noOpeningsModule.vue";
export default {
  components: {
    Nav3,
    GlobalFooter,
    Logos,
    NoOpenings,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/css/careers.scss";
</style>
