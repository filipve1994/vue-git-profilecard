<template>
  <div class="home">
    <SearchApp1 />
  </div>
  <PageTitleApp1 :title="`type username | githup`" />
  <div class="animating-bg"></div>
</template>

<script>
import SearchApp1 from "@/components/app1/SearchApp1";
import PageTitleApp1 from "@/components/app1/PageTitleApp1";
export default {
  name: "HomeApp1",
  components: { PageTitleApp1, SearchApp1 }
};
</script>

<!--<style scoped lang="scss">-->
<style lang="scss">
.home {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 5;
  overflow: hidden;
}
.animating-bg {
  width: 100vw;
  height: 100vh;
  //background-image: url(/images/bg.png);
  background-image: url(/images/app1/bg.png);
  background-size: cover;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  animation: 10s hue infinite alternate;
}
.animating-bg:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  filter: blur(3px);
  transform: scale(1.3);
}
</style>
