<template>
  <div class="mamnoon">
    <Nav3 />

    <NewsletterArchive />
  </div>
</template>
<script>
import NewsletterArchive from "@/components/NewsletterArchive";
import Nav3 from "@/components/Nav3";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "newsletter archive",
    // all titles will be injected into this template
    titleTemplate: "%s | nadi mama",
  },
  components: {
    NewsletterArchive,
    Nav3,
  },
};
</script>

<style lang="scss">


h1 {
  color: $nadi-red-color;
  text-align: center;
  margin: 30px auto;
}






@media only screen and (max-width: 992px) {


  .list-of-links {
    margin-top: 40px;
    a {
      display: block;
    }
  }
}

#gist ul {
  list-style-type: none;
  li {
    margin-bottom: 25px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 26px;
  }
}

.ff a {
  color: $nadi-red-color;
  text-decoration: underline;
  // display: block;
  text-decoration: none;
  font-size: 1.4em;
  font-weight: 600;
}
</style>
