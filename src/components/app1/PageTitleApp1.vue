<script>
export default {
  // name: 'vue-title',
  name: "PageTitleApp1",
  props: ["title"],
  watch: {
    title: {
      immediate: true,
      handler() {
        document.title = this.title;
      }
    }
  },
  render() {}
};
</script>
