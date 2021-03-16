<template>
  <div class="content">
    <div class="content-repos">
      <RepoApp1 :github_repos="github_repos" />
    </div>
  </div>
</template>

<script>
import RepoApp1 from "./RepoApp1";

export default {
  name: "ReposApp1",
  components: { RepoApp1 },
  props: ["github_repos"]
};
</script>

<!--<style scoped lang="scss">-->
<style lang="scss">
.content {
  padding: 15px;
  margin-left: 250px;

  &-repos {
    grid-gap: 15px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media only screen and (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media only screen and (max-width: 800px) {
    margin-left: auto;
  }
}
</style>
